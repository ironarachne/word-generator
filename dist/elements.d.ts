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
export declare const allElements: WordElementSet[];
