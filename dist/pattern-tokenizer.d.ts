/**
 * A utility class for tokenizing word generation patterns.
 */
export interface Token {
    type: "symbol" | "group" | "repeat";
    value?: string;
    choices?: string[];
}
export declare class PatternTokenizer {
    /**
     * Validates a word generation pattern.
     *
     * @param pattern - The pattern to validate.
     * @returns True if valid, throws an error otherwise.
     */
    validatePattern(pattern: string): boolean;
    /**
     * Tokenizes a word generation pattern into an array of structural tokens.
     *
     * @param pattern - The word generation pattern to tokenize.
     * @returns An array of Token objects parsed from the pattern.
     */
    tokenize(pattern: string): Token[];
}
