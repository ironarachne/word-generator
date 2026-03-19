/**
 * Represents a set of word elements.
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { WordElementSet } from "@ironarachne/word-generator";
 *
 * const set = new WordElementSet("affricates", "a", ["ch", "j"]);
 * ```
 */
export default class WordElementSet {
    /**
     * The name of the set (e.g., "consonants").
     */
    name;
    /**
     * The single-character symbol used to represent this set in word patterns.
     */
    symbol;
    /**
     * The string elements (letters or characters) contained in the set.
     */
    elements;
    /**
     * Creates a new WordElementSet.
     *
     * @param name - The name of the set.
     * @param symbol - The symbol used to represent the set in word patterns.
     * @param elements - The written elements in the set.
     */
    constructor(name, symbol, elements) {
        this.name = name;
        this.symbol = symbol;
        this.elements = elements;
    }
}
