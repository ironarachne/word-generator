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
    name: string;
    /**
     * The single-character symbol used to represent this set in word patterns.
     */
    symbol: string;
    /**
     * The string elements (letters or characters) contained in the set.
     */
    elements: string[];
    /**
     * Creates a new WordElementSet.
     *
     * @param name - The name of the set.
     * @param symbol - The symbol used to represent the set in word patterns.
     * @param elements - The written elements in the set.
     */
    constructor(name: string, symbol: string, elements: string[]);
}
