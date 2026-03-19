import { describe, expect, test } from "vitest";
import { allElements } from "../src/elements";

describe("allElements", () => {
  test("should have the expected number of defined elements", () => {
    expect(allElements.length).toEqual(45);
  });

  test("each element set should have a valid name and symbol", () => {
    allElements.forEach((elementSet) => {
      expect(typeof elementSet.name).toBe("string");
      expect(elementSet.name.length).toBeGreaterThan(0);
      expect(typeof elementSet.symbol).toBe("string");
      expect(elementSet.symbol.length).toBeGreaterThan(0);
    });
  });

  test("each element set should contain a non-empty array of elements", () => {
    allElements.forEach((elementSet) => {
      expect(Array.isArray(elementSet.elements)).toBe(true);
      expect(elementSet.elements.length).toBeGreaterThan(0);
      elementSet.elements.forEach(phoneme => {
        expect(typeof phoneme).toBe("string");
        // We aren't doing strict length validation because some phonemes might be empty string conceptually, 
        // though normally they aren't.
      });
    });
  });

  test("all symbols should be unique", () => {
    const symbols = allElements.map((el) => el.symbol);
    const uniqueSymbols = new Set(symbols);
    expect(uniqueSymbols.size).toBe(symbols.length);
  });
});
