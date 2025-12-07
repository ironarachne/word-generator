import * as RNG from "@ironarachne/rng";
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
export default class WordGenerator {
    patterns: string[];
    rng: RNG.RNG;
    constructor(rng?: RNG.RNG);
    generate(): string;
    parsePatternElement(element: string): string;
}
