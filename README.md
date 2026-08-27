# @ironarachne/word-generator

A library for generating random fictional words from phonetic patterns. Give it
a pattern like `cvccv`, and it draws from sets of phonological elements to build
a pronounceable word. Seed it, and the same pattern always produces the same
word.

Documentation available at: [ironarachne.github.io/word-generator](https://ironarachne.github.io/word-generator)

## Installation

```bash
npm install @ironarachne/word-generator
```

## Usage

```typescript
import { WordGenerator } from "@ironarachne/word-generator";
import { RNG } from "@ironarachne/rng";

// Seed the generator for reproducible output. Without an RNG argument it
// seeds itself from Date.now().
const generator = new WordGenerator(new RNG(12345));

generator.patterns.push("cvccv");
generator.patterns.push("cvccvc");

generator.generate();        // one word from a randomly chosen pattern
generator.generateSet(10);   // a Set of 10 distinct words
```

### Patterns

A pattern is a string of symbols. Each lowercase symbol in the table below is
replaced by a random element from its category; anything else is a terminal and
is emitted verbatim in lowercase.

| Syntax    | Meaning                                                        |
| --------- | -------------------------------------------------------------- |
| `c`       | A symbol — replaced by a random element from its category.       |
| `Z`       | A terminal — uppercase and unlisted characters pass through.     |
| `(a,b,c)` | A group — one of the comma-separated alternatives is chosen.     |
| `+`       | Repeats the preceding token. It may not start a pattern.         |

A group's chosen alternative is itself resolved character by character, so
alternatives may mix symbols and terminals: `(v,ai)` yields either a random
vowel or the literal `ai`, and `(vC,ee)` yields a random vowel followed by `c`,
or the literal `ee`.

Groups may not be nested or empty, and an unmatched parenthesis throws.

### Custom elements

Pass your own sets to the constructor to add symbols, or to override a built-in
one with the same symbol:

```typescript
import { WordElementSet, WordGenerator } from "@ironarachne/word-generator";

const generator = new WordGenerator(new RNG(12345), [
  new WordElementSet("my vowels", "v", ["a", "o", "u"]),
]);
```

### Other methods

- **`validatePattern(pattern)`**: Throws if the pattern is malformed, otherwise
  returns `true`.
- **`getAvailableSymbols()`**: Every symbol this generator recognizes.
- **`getElementSets()`**: The element sets backing those symbols.

## Symbol Reference

When constructing a pattern string for word generation, the following symbols (non-terminals) representing phonological categories are available. 

Uppercase alphabetical characters and any characters not in this list will be treated as terminals (output verbatim, though transformed to lowercase).

### Standard Characters

| Symbol | Category | Elements |
| --- | --- | --- |
| `#` | Digits | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 |
| `a` | Affricates | ch, j |
| `b` | Voiced Dental Plosive | d, dh |
| `c` | Consonants | b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z |
| `d` | Bilabials | p, b, m |
| `e` | Dentals | d, n, t, l |
| `f` | Fricatives | f, v, th, dh, s, z, sh, zh, h |
| `g` | Labiodentals | f, v |
| `h` | Voiceless Dental Plosives | t, th |
| `i` | Voiceless | h, f |
| `j` | Alveolars | t, d, s, z, n, l |
| `k` | Velar Plosives | c, k |
| `l` | Liquids | l, r |
| `m` | Close Mid Vowels | i, ö, eu, oe, e |
| `n` | Nasals | m, n, ng |
| `o` | Stops | t, d, p |
| `p` | Plosives | g, k, p, b, t, d, q |
| `q` | Palatals/Post-alveolars | sh, zh, ch, j, y |
| `r` | Glottals | h, ' |
| `s` | Sibilants | s, sh, z, zh |
| `t` | Stridents | f, v, s, sh, z, zh |
| `u` | Approximants/Glides | w, y |
| `v` | Vowels | a, e, i, o, u |
| `w` | Velars | w, wh, g |
| `x` | Accented Vowels | á, é, í, ó, ú |
| `y` | Open Vowels | e, ee, i, oo, y, ie |
| `z` | Trills/Flaps | r, rr |

### Greek Characters

| Symbol | Category | Elements |
| --- | --- | --- |
| `α` | Diphthongs | oi, ou, ai, ei, au |
| `β` | Front Vowels | i, e, ae |
| `γ` | Back Vowels | u, o, au, aa |
| `δ` | Rounded Vowels | o, u |
| `ε` | Unrounded Vowels | a, e, i |
| `ζ` | Voiceless Fricatives | f, th, s, sh, h |
| `η` | Voiced Fricatives | v, dh, z, zh |
| `θ` | Voiceless Stops | p, t, k, c, q |
| `ι` | Voiced Stops | b, d, g |
| `κ` | Retroflex Consonants | ṭ, ḍ, ṇ, ṛ, ṣ, ẓ |
| `λ` | Uvular and Pharyngeal Consonants | q, gh, x, ħ, ʕ |
| `μ` | Ejectives | p', t', k', q', s', ts', ch' |
| `ν` | Implosives | bh, dh, gh |
| `ξ` | Clicks | \|, \|\|, \|! |
| `π` | Lateral Fricatives and Affricates | ll, tl, dl, hl |
| `ρ` | Nasalized Vowels | ã, ẽ, ĩ, õ, ũ, an, on, in |
| `σ` | Long Vowels | aa, ee, ii, oo, uu |
| `τ` | Tonal Vowels | á, à, â, ǎ, ā, é, è, ê, ě, ē, í, ì, î, ǐ, ī |

## Development

```bash
git clone https://github.com/ironarachne/word-generator.git
cd word-generator
npm install
```

### Commands

| Command            | What it does                                    |
| ------------------ | ----------------------------------------------- |
| `npm run check`    | Lint, build, and test — run this before pushing. |
| `npm test`         | Run the [Vitest](https://vitest.dev/) suite.     |
| `npm run lint`     | Check formatting and lint rules with [Biome](https://biomejs.dev/). |
| `npm run lint:fix` | Apply formatting and safe lint fixes.            |
| `npm run build`    | Compile TypeScript to `dist/`.                   |
| `npm run docs`     | Generate the TypeDoc site into `docs/`.          |

`dist/` and `docs/` are generated output and are not committed.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the pull
request process and [CODE_STYLE.md](CODE_STYLE.md) for the conventions this
codebase follows.

In short: branch from `main`, run `npm run check`, and open a pull request.
`main` is protected, so every change lands through review with CI green.

## License

MIT — see [LICENSE](LICENSE).
