import { describe, expect, test } from "vitest";
import { allElements } from "../src/index";

describe("list", () => {
  test("should have twenty elements", () => {
    expect(allElements.length).toEqual(20);
  });
});
