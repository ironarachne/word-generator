import { describe, expect, test } from "vitest";
import { RNG } from "@ironarachne/rng";
import { WordGenerator } from "../src/generator";

describe("generate", () => {
  const generator = new WordGenerator();
  generator.patterns = ["POTATO"];
  test("should return a 'potato' with the pattern set ['POTATO']", () => {
    expect(generator.generate()).toEqual("potato");
  });
});

describe("WordGenerator", () => {
  test("generates a word from a simple pattern", () => {
    const gen = new WordGenerator(new RNG(123));
    gen.patterns = ["vccv"];
    const word = gen.generate();
    expect(typeof word).toBe("string");
    expect(word.length).toBe(4);
  });

  test("generates different words for different patterns", () => {
    const gen = new WordGenerator(new RNG(123));
    gen.patterns = ["vccv", "cvcv"];
    const word1 = gen.generate();
    gen.patterns.reverse();
    const word2 = gen.generate();
    expect(word1).not.toEqual(word2);
  });

  test("returns empty string if pattern is empty", () => {
    const gen = new WordGenerator(new RNG(123));
    gen.patterns = [""];
    expect(gen.generate()).toBe("");
  });

  test("handles invalid pattern symbols as lowercase", () => {
    const gen = new WordGenerator(new RNG(123));
    gen.patterns = ["ZQX"];
    expect(gen.generate()).toBe("zqx");
  });

  test("is deterministic with a fixed seed", () => {
    const gen1 = new WordGenerator(new RNG(42));
    gen1.patterns = ["vccv"];
    const gen2 = new WordGenerator(new RNG(42));
    gen2.patterns = ["vccv"];
    expect(gen1.generate()).toBe(gen2.generate());
  });

  test("supports alternation with parentheses", () => {
    const gen = new WordGenerator(new RNG(1));
    gen.patterns = ["(ab,cd,ef)"];
    const word = gen.generate();
    // Should be a string of the same length as one of the alternated options
    expect(typeof word).toBe("string");
    expect([2, 3]).toContain(word.length);
    expect(word).not.toBe("");
  });

  test("supports repeat operator '+'", () => {
    const gen = new WordGenerator(new RNG(1));
    gen.patterns = ["vc+"];
    // The third character should repeat the previous phoneme
    const word = gen.generate();
    expect(word[2]).toBe(word[1]);
  });

  test("supports repeat operator '+' immediately after a group", () => {
    const gen = new WordGenerator(new RNG(1));
    gen.patterns = ["(ZQ,WX)+"];
    const word = gen.generate();
    expect(word.length).toBe(4); // Length 2 duplicated
    expect(word.substring(0, 2)).toBe(word.substring(2, 4));
  });

test("throws if '+' is the first character", () => {
    const gen = new WordGenerator(new RNG(1));
    gen.patterns = ["+ZQ"];
    expect(() => gen.generate()).toThrow();
  });

  test("handles all element symbols", () => {
    const gen = new WordGenerator(new RNG(1));
    // All symbols from allElements in elements.ts
    gen.patterns = ["aebcfhiklmnopsvwxyt"];
    const word = gen.generate();
    expect(word.length).toBeGreaterThanOrEqual(18); // Each symbol replaced by at least one letter
  });

  test("handles Greek characters in patterns", () => {
    const gen = new WordGenerator(new RNG(1));
    // Greek symbols: α, β, γ, δ, ε, ζ, η, θ, ι
    gen.patterns = ["αβγδεζηθικλμνξπρστ"];
    const word = gen.generate();
    expect(word.length).toBeGreaterThanOrEqual(18);
    expect(word).not.toMatch(/[αβγδεζηθικλμνξπρστ]/); // They should all be replaced by regular phonetic elements
  });

  test("throws error if no patterns are set", () => {
    const gen = new WordGenerator(new RNG(1));
    gen.patterns = [];
    expect(() => gen.generate()).toThrow("Cannot generate: no patterns available.");
  });

  test("supports custom elements override", () => {
    const customElements = [
      { name: "My Consonants", symbol: "c", elements: ["X", "Y", "Z"] }
    ];
    const gen = new WordGenerator(new RNG(1), customElements);
    gen.patterns = ["ccc"];
    const word = gen.generate();
    expect(word).toMatch(/[XYZ]{3}/);
  });

  test("can generate a set of words", () => {
    const gen = new WordGenerator(new RNG(123));
    gen.patterns = ["vccv"];
    const set = gen.generateSet(5);
    expect(set.size).toBe(5);
    set.forEach((word) => {
      expect(word.length).toBe(4);
    });
  });

  test("validate validates valid patterns and throws on invalid", () => {
    const gen = new WordGenerator(new RNG(123));
    expect(gen.validatePattern("vccv")).toBe(true);
    expect(() => gen.validatePattern("vc(c")).toThrow("Unmatched opening parenthesis.");
  });

  test("getAvailableSymbols retrieves symbols including defaults and custom", () => {
    const customElements = [
      { name: "Alien", symbol: "!", elements: ["klingon"] }
    ];
    const gen = new WordGenerator(new RNG(123), customElements);
    const symbols = gen.getAvailableSymbols();
    expect(symbols).toContain("v");
    expect(symbols).toContain("c");
    expect(symbols).toContain("!");
  });
});
