const fs = require('fs');
let content = fs.readFileSync('tests/generator.test.ts', 'utf8');

const replacement = `
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
`;

content = content.replace(/  test\("handles '\+' safely when it is the first character"[\s\S]*\}\);/, replacement.trim() + '\n');
fs.writeFileSync('tests/generator.test.ts', content);
