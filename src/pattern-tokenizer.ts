/**
 * A utility class for tokenizing word generation patterns.
 */
export interface Token {
  type: "symbol" | "group" | "repeat";
  value?: string;
  choices?: string[];
}

export class PatternTokenizer {
  /**
   * Validates a word generation pattern.
   *
   * @param pattern - The pattern to validate.
   * @returns True if valid, throws an error otherwise.
   */
  validatePattern(pattern: string): boolean {
    let inGroup = false;
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "(") {
        if (inGroup) throw new Error("Nested groups are not supported.");
        inGroup = true;
      } else if (pattern[i] === ")") {
        if (!inGroup) throw new Error("Unmatched closing parenthesis.");
        inGroup = false;
      }
    }
    if (inGroup) throw new Error("Unmatched opening parenthesis.");

    // Check leading repeat
    if (pattern.startsWith("+")) {
      throw new Error("Pattern cannot start with a repeat operator ('+').");
    }

    return true;
  }

  /**
   * Tokenizes a word generation pattern into an array of structural tokens.
   *
   * @param pattern - The word generation pattern to tokenize.
   * @returns An array of Token objects parsed from the pattern.
   */
  tokenize(pattern: string): Token[] {
    this.validatePattern(pattern);

    const tokens: Token[] = [];
    let i = 0;
    while (i < pattern.length) {
      if (pattern[i] === "(") {
        const endIndex = pattern.indexOf(")", i);
        const groupContent = pattern.substring(i + 1, endIndex);
        const parts = groupContent.split(",");
        tokens.push({ type: "group", choices: parts });
        i = endIndex + 1;
      } else if (pattern[i] === "+") {
        tokens.push({ type: "repeat" });
        i++;
      } else {
        tokens.push({ type: "symbol", value: pattern[i] });
        i++;
      }
    }
    return tokens;
  }
}
