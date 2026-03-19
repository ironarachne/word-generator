import { describe, it, expect } from "vitest";
import { PatternTokenizer } from "../src/pattern-tokenizer.js";

describe("PatternTokenizer", () => {
  const tokenizer = new PatternTokenizer();

  it("should tokenize simple string sequences into individual symbols", () => {
    const result = tokenizer.tokenize("vccv");
    expect(result).toEqual([
      { type: "symbol", value: "v" },
      { type: "symbol", value: "c" },
      { type: "symbol", value: "c" },
      { type: "symbol", value: "v" }
    ]);
  });

  it("should capture grouping inside parentheses as group tokens with choices", () => {
    const result = tokenizer.tokenize("(a,b,c)");
    expect(result).toEqual([{ type: "group", choices: ["a", "b", "c"] }]);
  });

  it("should tokenize mixed sequences with plain characters and groups", () => {
    const result = tokenizer.tokenize("v(a,b,c)c");
    expect(result).toEqual([
      { type: "symbol", value: "v" },
      { type: "group", choices: ["a", "b", "c"] },
      { type: "symbol", value: "c" }
    ]);
  });

  it("should throw an error for unsupported nested groups", () => {
    expect(() => tokenizer.tokenize("v((a,b),c)")).toThrowError("Nested groups are not supported.");
  });

  it("should throw an error for unclosed parentheses", () => {
    expect(() => tokenizer.tokenize("v(abc")).toThrowError("Unmatched opening parenthesis.");
  });
  
  it("should throw an error for unmatched closing parentheses", () => {
    expect(() => tokenizer.tokenize("v)abc(")).toThrowError("Unmatched closing parenthesis.");
  });
  
  it("should throw an error if the pattern starts with a '+'", () => {
    expect(() => tokenizer.tokenize("+v")).toThrowError("Pattern cannot start with a repeat operator ('+').");
  });

  it("should handle repeat signs correctly", () => {
    const result = tokenizer.tokenize("v+");
    expect(result).toEqual([
      { type: "symbol", value: "v" },
      { type: "repeat" }
    ]);
  });

  it("should handle empty strings", () => {
    const result = tokenizer.tokenize("");
    expect(result).toEqual([]);
  });

  it("should handle multiple groups", () => {
    const result = tokenizer.tokenize("(a,e)(s,t)");
    expect(result).toEqual([
      { type: "group", choices: ["a", "e"] },
      { type: "group", choices: ["s", "t"] }
    ]);
  });
});
