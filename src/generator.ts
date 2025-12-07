import * as RNG from "@ironarachne/rng";
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
  patterns: string[];
  rng: RNG.RNG;

  constructor(rng: RNG.RNG = new RNG.RNG(Date.now())) {
    this.patterns = [];
    this.rng = rng;
  }

  generate(): string {
    const pattern = this.rng.item(this.patterns);

    let word = "";
    const phonemes = [];

    for (let i = 0; i < pattern.length; i++) {
      let phoneme = pattern[i];
      if (pattern[i] === "+") {
        phoneme = phonemes[i - 1];
      } else if (pattern[i] === "(") {
        i++;
        const parts = [];
        let foundEnd = false;
        let part = "";
        while (!foundEnd) {
          if (pattern[i] === ")") {
            foundEnd = true;
            parts.push(part);
          } else if (pattern[i] === ",") {
            parts.push(part);
            part = "";
            i++;
          } else {
            part += pattern[i];
            i++;
          }
        }
        const element = this.rng.item(parts);
        phoneme = "";
        for (let j = 0; j < element.length; j++) {
          phoneme += this.parsePatternElement(element[j]);
        }
      } else {
        phoneme = this.parsePatternElement(pattern[i]);
      }
      word += phoneme;
      phonemes.push(phoneme);
    }

    return word;
  }

  parsePatternElement(element: string): string {
    for (let i = 0; i < allElements.length; i++) {
      if (element === allElements[i].symbol) {
        return this.rng.item(allElements[i].elements);
      }
    }

    return element.toLowerCase();
  }
}