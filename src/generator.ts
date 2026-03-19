import * as RNG from "@ironarachne/rng";
import { allElements } from "./elements.js";
import type WordElementSet from "./elementset.js";
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
  patterns: string[];

  /** The active element set used to parse phonetic elements. */
  elements: WordElementSet[];

  /** A Map for O(1) lookups of phonetic elements by symbol. */
  private elementMap: Map<string, WordElementSet>;

  private tokenizer: PatternTokenizer;

  /** The Random Number Generator. */
  rng: RNG.RNG;

  /**
   * Creates a new WordGenerator.
   *
   * @param rng - Optional instance of an RNG to use.
   * @param customElements - Optional additional or replacement custom element sets to inject.
   */
  constructor(
    rng: RNG.RNG = new RNG.RNG(Date.now()),
    customElements: WordElementSet[] = [],
  ) {
    this.rng = rng;
    // Overwrite default elements if custom elements share the same symbol
    this.elementMap = new Map();
    for (const el of allElements) {
      this.elementMap.set(el.symbol, el);
    }
    for (const el of customElements) {
      this.elementMap.set(el.symbol, el);
    }

    this.elements = Array.from(this.elementMap.values());
    this.patterns = [];
    this.tokenizer = new PatternTokenizer();
  }

  /**
   * Validates a pattern before attempting generation.
   *
   * @param pattern - The word generation pattern to validate.
   * @returns True if valid, throws if invalid.
   */
  validatePattern(pattern: string): boolean {
    return this.tokenizer.validatePattern(pattern);
  }

  /**
   * Retrieves all loaded symbols available for pattern generation.
   *
   * @returns An array of string symbols.
   */
  getAvailableSymbols(): string[] {
    return Array.from(this.elementMap.keys());
  }

  /**
   * Generates a single word based on the loaded patterns.
   *
   * @returns A generated word following a randomly selected pattern.
   * @throws An Error if there are no active patterns to choose from.
   */
  generate(): string {
    if (this.patterns.length === 0) {
      throw new Error("Cannot generate: no patterns available.");
    }

    const rawPattern = this.rng.item(this.patterns);

    // Parse into distinct functional tokens
    const tokens = this.tokenizer.tokenize(rawPattern);

    let word = "";
    let lastResolvedTerminal = "";

    for (const token of tokens) {
      let terminal = "";

      if (token.type === "repeat") {
        terminal = lastResolvedTerminal;
      } else if (token.type === "group" && token.choices) {
        const selectedPart = this.rng.item(token.choices);

        for (const char of selectedPart) {
          terminal += this.parsePatternElement(char);
        }
      } else if (token.type === "symbol" && token.value) {
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
  generateSet(count: number, maxAttempts: number = count * 10): Set<string> {
    if (this.patterns.length === 0) {
      throw new Error("Cannot generate set: no patterns available.");
    }

    const results = new Set<string>();
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
  getElementSets(): WordElementSet[] {
    return [...this.elements].sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Parses a pattern element into an appropriately matched phoneme.
   *
   * @param element - The symbol to parse (e.g. "v" or "c").
   * @returns A phonetic string corresponding to the element symbol, or the original element cast to lowercase.
   */
  parsePatternElement(element: string): string {
    const set = this.elementMap.get(element);
    if (!set) {
      return element.toLowerCase();
    }
    return this.rng.item(set.elements);
  }
}
