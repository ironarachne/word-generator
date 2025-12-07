import { describe, expect, jest, test } from "@jest/globals";
import WordGenerator from "../src/generator";

jest.useFakeTimers();

describe("generate", () => {
  const generator = new WordGenerator();
  generator.patterns = ["POTATO"];
  test("should return a 'potato' with the pattern set ['POTATO']", () => {
    expect(generator.generate()).toEqual("potato");
  });
});

describe("WordGenerator", () => {
  test("generates a word from a simple pattern", () => {
    const gen = new WordGenerator(123);
    gen.patterns = ["vccv"];
    const word = gen.generate();
    expect(typeof word).toBe("string");
    expect(word.length).toBe(4);
  });

  test("generates different words for different patterns", () => {
    const gen = new WordGenerator(123);
    gen.patterns = ["vccv", "cvcv"];
    const word1 = gen.generate();
    gen.patterns.reverse();
    const word2 = gen.generate();
    expect(word1).not.toEqual(word2);
  });

  test("returns empty string if pattern is empty", () => {
    const gen = new WordGenerator(123);
    gen.patterns = [""];
    expect(gen.generate()).toBe("");
  });

  test("handles invalid pattern symbols as lowercase", () => {
    const gen = new WordGenerator(123);
    gen.patterns = ["ZQX"];
    expect(gen.generate()).toBe("zqx");
  });

  test("is deterministic with a fixed seed", () => {
    const gen1 = new WordGenerator(42);
    gen1.patterns = ["vccv"];
    const gen2 = new WordGenerator(42);
    gen2.patterns = ["vccv"];
    expect(gen1.generate()).toBe(gen2.generate());
  });

  test("supports alternation with parentheses", () => {
    const gen = new WordGenerator(1);
    gen.patterns = ["(ab,cd,ef)"];
    const word = gen.generate();
    // Should be a string of the same length as one of the alternated options
    expect(typeof word).toBe("string");
    expect([2, 3]).toContain(word.length);
    expect(word).not.toBe("");
  });

  test("supports repeat operator '+'", () => {
    const gen = new WordGenerator(1);
    gen.patterns = ["vc+"];
    // The third character should repeat the previous phoneme
    const word = gen.generate();
    expect(word[2]).toBe(word[1]);
  });

  test("handles all element symbols", () => {
    const gen = new WordGenerator(1);
    // All symbols from allElements in elements.ts
    gen.patterns = ["aebcfhiklmnopsvwxyt"];
    const word = gen.generate();
    expect(word.length).toBeGreaterThanOrEqual(18); // Each symbol replaced by at least one letter
  });

  test("throws or returns something reasonable if no patterns are set", () => {
    const gen = new WordGenerator(1);
    gen.patterns = [];
    expect(() => gen.generate()).toThrow();
  });
});
