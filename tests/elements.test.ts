import { describe, expect, test } from "@jest/globals";
import { allElements } from "../src/index";

describe("list", () => {
  test("should have nineteen elements", () => {
    expect(allElements.length).toEqual(19);
  });
});
