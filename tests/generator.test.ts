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
