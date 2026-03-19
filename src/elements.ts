import WordElementSet from "./elementset.js";

/**
 * All available word elements. These are used in constructing patterns for word generation.
 *
 * Current mapping of symbols to phonological categories:
 * - `#`: digits
 * - `a`: affricates
 * - `b`: voiced dental plosive
 * - `c`: consonants
 * - `d`: bilabials
 * - `e`: dentals
 * - `f`: fricatives
 * - `g`: labiodentals
 * - `h`: voiceless dental plosives
 * - `i`: voiceless
 * - `j`: alveolars
 * - `k`: velar plosives
 * - `l`: liquids
 * - `m`: close mid vowels
 * - `n`: nasals
 * - `o`: stops
 * - `p`: plosives
 * - `q`: palatals/post-alveolars
 * - `r`: glottals
 * - `s`: sibilants
 * - `t`: stridents
 * - `u`: approximants/glides
 * - `v`: vowels
 * - `w`: velars
 * - `x`: accented vowels
 * - `y`: open vowels
 * - `z`: trills/flaps
 * - `α` (alpha): diphthongs
 * - `β` (beta): front vowels
 * - `γ` (gamma): back vowels
 * - `δ` (delta): rounded vowels
 * - `ε` (epsilon): unrounded vowels
 * - `ζ` (zeta): voiceless fricatives
 * - `η` (eta): voiced fricatives
 * - `θ` (theta): voiceless stops
 * - `ι` (iota): voiced stops
 *
 * @since 1.0.0
 */
export const allElements: WordElementSet[] = [
  new WordElementSet("digits", "#", [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]),
  new WordElementSet("affricates", "a", ["ch", "j"]),
  new WordElementSet("voiced dental plosive", "b", ["d", "dh"]),
  new WordElementSet("consonants", "c", [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]),
  new WordElementSet("bilabials", "d", ["p", "b", "m"]),
  new WordElementSet("dentals", "e", ["d", "n", "t", "l"]),
  new WordElementSet("fricatives", "f", [
    "f",
    "v",
    "th",
    "dh",
    "s",
    "z",
    "sh",
    "zh",
    "h",
  ]),
  new WordElementSet("labiodentals", "g", ["f", "v"]),
  new WordElementSet("voiceless dental plosives", "h", ["t", "th"]),
  new WordElementSet("voiceless", "i", ["h", "f"]),
  new WordElementSet("alveolars", "j", ["t", "d", "s", "z", "n", "l"]),
  new WordElementSet("velar plosives", "k", ["c", "k"]),
  new WordElementSet("liquids", "l", ["l", "r"]),
  new WordElementSet("close mid vowels", "m", ["i", "ö", "eu", "oe", "e"]),
  new WordElementSet("nasals", "n", ["m", "n", "ng"]),
  new WordElementSet("stops", "o", ["t", "d", "p"]),
  new WordElementSet("plosives", "p", ["g", "k", "p", "b", "t", "d", "q"]),
  new WordElementSet("palatals/post-alveolars", "q", [
    "sh",
    "zh",
    "ch",
    "j",
    "y",
  ]),
  new WordElementSet("glottals", "r", ["h", "?"]),
  new WordElementSet("sibilants", "s", ["s", "sh", "z", "zh"]),
  new WordElementSet("stridents", "t", ["f", "v", "s", "sh", "z", "zh"]),
  new WordElementSet("approximants/glides", "u", ["w", "y"]),
  new WordElementSet("vowels", "v", ["a", "e", "i", "o", "u"]),
  new WordElementSet("velars", "w", ["w", "wh", "g"]),
  new WordElementSet("accented vowels", "x", ["á", "é", "í", "ó", "ú"]),
  new WordElementSet("open vowels", "y", ["e", "ee", "i", "oo", "y", "ie"]),
  new WordElementSet("trills/flaps", "z", ["r", "rr"]),
  new WordElementSet("diphthongs", "α", ["oi", "ou", "ai", "ei", "au"]),
  new WordElementSet("front vowels", "β", ["i", "e", "æ"]),
  new WordElementSet("back vowels", "γ", ["u", "o", "ɔ", "ɑ"]),
  new WordElementSet("rounded vowels", "δ", ["o", "u"]),
  new WordElementSet("unrounded vowels", "ε", ["a", "e", "i"]),
  new WordElementSet("voiceless fricatives", "ζ", ["f", "th", "s", "sh", "h"]),
  new WordElementSet("voiced fricatives", "η", ["v", "dh", "z", "zh"]),
  new WordElementSet("voiceless stops", "θ", ["p", "t", "k", "c", "q"]),
  new WordElementSet("voiced stops", "ι", ["b", "d", "g"]),
  new WordElementSet("retroflex consonants", "κ", [
    "ṭ",
    "ḍ",
    "ṇ",
    "ṛ",
    "ṣ",
    "ẓ",
  ]),
  new WordElementSet("uvular and pharyngeal consonants", "λ", [
    "q",
    "gh",
    "x",
    "ħ",
    "ʕ",
  ]),
  new WordElementSet("ejectives", "μ", [
    "p'",
    "t'",
    "k'",
    "q'",
    "s'",
    "ts'",
    "ch'",
  ]),
  new WordElementSet("implosives", "ν", ["ɓ", "ɗ", "ɠ"]),
  new WordElementSet("clicks", "ξ", [
    "c",
    "x",
    "q",
    "nc",
    "nx",
    "nq",
    "gc",
    "gx",
    "gq",
  ]),
  new WordElementSet("lateral fricatives and affricates", "π", [
    "ll",
    "tl",
    "dl",
    "hl",
  ]),
  new WordElementSet("nasalized vowels", "ρ", [
    "ã",
    "ẽ",
    "ĩ",
    "õ",
    "ũ",
    "an",
    "on",
    "in",
  ]),
  new WordElementSet("long vowels", "σ", ["aa", "ee", "ii", "oo", "uu"]),
  new WordElementSet("tonal vowels", "τ", [
    "á",
    "à",
    "â",
    "ǎ",
    "ā",
    "é",
    "è",
    "ê",
    "ě",
    "ē",
    "í",
    "ì",
    "î",
    "ǐ",
    "ī",
  ]),
];
