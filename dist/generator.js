import * as RND from "@ironarachne/rng";
import { allElements } from "./elements.js";
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
    constructor() {
        this.patterns = [];
    }
    generate() {
        const pattern = RND.item(this.patterns);
        let word = "";
        const phonemes = [];
        for (let i = 0; i < pattern.length; i++) {
            let phoneme = pattern[i];
            if (pattern[i] === "+") {
                phoneme = phonemes[i - 1];
            }
            else if (pattern[i] === "(") {
                i++;
                const parts = [];
                let foundEnd = false;
                let part = "";
                while (!foundEnd) {
                    if (pattern[i] === ")") {
                        foundEnd = true;
                        parts.push(part);
                    }
                    else if (pattern[i] === ",") {
                        parts.push(part);
                        part = "";
                        i++;
                    }
                    else {
                        part += pattern[i];
                        i++;
                    }
                }
                const element = RND.item(parts);
                phoneme = "";
                for (let j = 0; j < element.length; j++) {
                    phoneme += parsePatternElement(element[j]);
                }
            }
            else {
                phoneme = parsePatternElement(pattern[i]);
            }
            word += phoneme;
            phonemes.push(phoneme);
        }
        return word;
    }
}
function parsePatternElement(element) {
    for (let i = 0; i < allElements.length; i++) {
        if (element === allElements[i].symbol) {
            return RND.item(allElements[i].elements);
        }
    }
    return element.toLowerCase();
}
