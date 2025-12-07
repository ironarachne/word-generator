/**
 * WordElementSet class
 *
 * @since 1.0.0
 * @class
 * @classdesc Represents a set of word elements.
 * @property {string} name The name of the set.
 * @property {string} symbol The symbol used to represent the set in word patterns.
 * @property {string[]} elements The written elements in the set.
 *
 * @example
 * ```typescript
 * import { WordElementSet } from "@ironarachne/word-generator";
 *
 * const set = new WordElementSet("affricates", "a", ["ch", "j"]);
 * ```
 */
export default class WordElementSet {
    name;
    symbol;
    elements;
    constructor(name, symbol, elements) {
        this.name = name;
        this.symbol = symbol;
        this.elements = elements;
    }
}
