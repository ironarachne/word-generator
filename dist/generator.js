"use strict";
import * as RND from "@ironarachne/rng";
import { allElements } from "./elements.js";
export default class WordGenerator {
    constructor() {
        this.patterns = [];
    }
    generate() {
        let pattern = RND.item(this.patterns);
        let word = "";
        let phonemes = [];
        for (let i = 0; i < pattern.length; i++) {
            let phoneme = pattern[i];
            if (pattern[i] === "+") {
                phoneme = phonemes[i - 1];
            }
            else if (pattern[i] == "(") {
                i++;
                let parts = [];
                let foundEnd = false;
                let part = "";
                while (!foundEnd) {
                    if (pattern[i] == ")") {
                        foundEnd = true;
                        parts.push(part);
                    }
                    else if (pattern[i] == ",") {
                        parts.push(part);
                        part = "";
                        i++;
                    }
                    else {
                        part += pattern[i];
                        i++;
                    }
                }
                let element = RND.item(parts);
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
