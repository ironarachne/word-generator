'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const RND = __importStar(require("@ironarachne/rng"));
const Elements = __importStar(require("./elements"));
class WordGenerator {
    constructor() {
        this.patterns = [];
    }
    generate() {
        let pattern = RND.item(this.patterns);
        let word = '';
        let phonemes = [];
        for (let i = 0; i < pattern.length; i++) {
            let phoneme = pattern[i];
            if (pattern[i] === '+') {
                phoneme = phonemes[i - 1];
            }
            else if (pattern[i] == '(') {
                i++;
                let parts = [];
                let foundEnd = false;
                let part = '';
                while (!foundEnd) {
                    if (pattern[i] == ')') {
                        foundEnd = true;
                        parts.push(part);
                    }
                    else if (pattern[i] == ',') {
                        parts.push(part);
                        part = '';
                        i++;
                    }
                    else {
                        part += pattern[i];
                        i++;
                    }
                }
                let element = RND.item(parts);
                phoneme = '';
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
exports.default = WordGenerator;
function parsePatternElement(element) {
    let elements = Elements.all();
    for (let i = 0; i < elements.length; i++) {
        if (element === elements[i].symbol) {
            return RND.item(elements[i].elements);
        }
    }
    return element.toLowerCase();
}
