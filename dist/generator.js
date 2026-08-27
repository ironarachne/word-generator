import * as RNG from "@ironarachne/rng";
import { allElements } from "./elements.js";
import { PatternTokenizer } from "./pattern-tokenizer.js";
/**
 * A word generator.
 *
 * @remarks After initializing the word generator by adding patterns to the internal patterns array, you can generate words by calling the generate method.
 *
 * @example Generating a word
 * ```typescript
 * import { WordGenerator } from "@ironarachne/word-generator";
 *
 * const generator = new WordGenerator();
 * generator.patterns.push("vccv");
 * generator.patterns.push("vccvc");
 *
 * const word = generator.generate();
 * ```
 */
export class WordGenerator {
    /** The list of generic patterns available. */
    patterns;
    /** A Map for O(1) lookups of phonetic elements by symbol. */
    elementMap;
    tokenizer;
    tokenCache;
    cachedSymbols = null;
    cachedElementSets = null;
    /** The Random Number Generator. */
    rng;
    /**
     * Creates a new WordGenerator.
     *
     * @param rng - Optional instance of an RNG to use.
     * @param customElements - Optional additional or replacement custom element sets to inject.
     */
    constructor(rng = new RNG.RNG(Date.now()), customElements = []) {
        this.rng = rng;
        this.elementMap = new Map();
        for (const el of allElements) {
            this.elementMap.set(el.symbol, el);
        }
        for (const el of customElements) {
            this.elementMap.set(el.symbol, el);
        }
        this.patterns = [];
        this.tokenizer = new PatternTokenizer();
        this.tokenCache = new Map();
    }
    /**
     * Gets all loaded element sets.
     */
    get elements() {
        return Array.from(this.elementMap.values());
    }
    /**
     * Validates a pattern before attempting generation.
     *
     * @param pattern - The word generation pattern to validate.
     * @returns True if valid, throws if invalid.
     */
    validatePattern(pattern) {
        return this.tokenizer.validatePattern(pattern);
    }
    /**
     * Retrieves all loaded symbols available for pattern generation.
     *
     * @returns An array of string symbols.
     */
    getAvailableSymbols() {
        if (!this.cachedSymbols) {
            this.cachedSymbols = Array.from(this.elementMap.keys());
        }
        return this.cachedSymbols;
    }
    /**
     * Generates a single word based on the loaded patterns.
     *
     * @returns A generated word following a randomly selected pattern.
     * @throws An Error if there are no active patterns to choose from.
     */
    generate() {
        if (this.patterns.length === 0) {
            throw new Error("Cannot generate: no patterns available.");
        }
        const rawPattern = this.rng.item(this.patterns);
        let tokens = this.tokenCache.get(rawPattern);
        if (!tokens) {
            tokens = this.tokenizer.tokenize(rawPattern);
            this.tokenCache.set(rawPattern, tokens);
        }
        let word = "";
        let lastResolvedTerminal = "";
        for (const token of tokens) {
            let terminal = "";
            if (token.type === "repeat") {
                terminal = lastResolvedTerminal;
            }
            else if (token.type === "group" && token.choices) {
                terminal = this.rng.item(token.choices);
            }
            else if (token.type === "symbol" && token.value) {
                terminal = this.parsePatternElement(token.value);
            }
            word += terminal;
            lastResolvedTerminal = terminal;
        }
        return word;
    }
    /**
     * Generates a set of example words.
     *
     * @param count - The number of unique words to generate.
     * @param maxAttempts - The maximum number of attempts to generate unique words.
     * @returns A Set of generated words.
     */
    generateSet(count, maxAttempts = count * 10) {
        if (this.patterns.length === 0) {
            throw new Error("Cannot generate set: no patterns available.");
        }
        const results = new Set();
        let attempts = 0;
        while (results.size < count && attempts < maxAttempts) {
            results.add(this.generate());
            attempts++;
        }
        return results;
    }
    /**
     * Retrieves all known element sets, sorted in alphabetical order by name.
     *
     * @returns An array of all available WordElementSets.
     */
    getElementSets() {
        if (!this.cachedElementSets) {
            this.cachedElementSets = [...this.elementMap.values()].sort((a, b) => a.name.localeCompare(b.name));
        }
        return this.cachedElementSets;
    }
    /**
     * Parses a pattern element into an appropriately matched phoneme.
     *
     * @param element - The symbol to parse (e.g. "v" or "c").
     * @returns A phonetic string corresponding to the element symbol, or the original element cast to lowercase.
     */
    parsePatternElement(element) {
        const set = this.elementMap.get(element);
        if (!set) {
            return element.toLowerCase();
        }
        return this.rng.item(set.elements);
    }
}
