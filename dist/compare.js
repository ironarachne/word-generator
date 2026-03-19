import WordGenerator from "./generator.js";
import * as Presets from "./presets.js";
import * as RNG from "@ironarachne/rng";
// Load known corpora
import englishCorpus from "./corpora/english.json" with { type: "json" };
import spanishCorpus from "./corpora/spanish.json" with { type: "json" };
import frenchCorpus from "./corpora/french.json" with { type: "json" };
import germanCorpus from "./corpora/german.json" with { type: "json" };
const knownCorpora = {
    English: englishCorpus,
    Spanish: spanishCorpus,
    French: frenchCorpus,
    German: germanCorpus,
};
/**
 * Calculates a score between 0.0 and 1.0 indicating how similar a word sounds
 * to a specific language profile based on comparative linguistics (n-gram analysis).
 *
 * @param word The word to score.
 * @param languageName The name of the language (e.g., "English", "Spanish") or a key in Presets.
 * @returns A score between 0.0 and 1.0, where 0.0 means very dissimilar and 1.0 means exactly like the language.
 */
export function getLinguisticScore(word, languageName) {
    if (!word || !languageName)
        return 0.0;
    // Build an n-gram model of the language (bigrams and trigrams)
    const languageNGrams = new Set();
    // See if we have a real word corpus for this language first
    let sampleWords = knownCorpora[languageName] || [];
    if (sampleWords.length === 0) {
        // Check if it's stored differently regarding casing
        for (const key of Object.keys(knownCorpora)) {
            if (key.toLowerCase() === languageName.toLowerCase()) {
                sampleWords = knownCorpora[key];
                break;
            }
        }
    }
    // Fallback to generating simulated words if no corpus exists
    if (sampleWords.length === 0) {
        let profile;
        // Find the language profile from the presets
        for (const key of Object.keys(Presets)) {
            const preset = Presets[key];
            if (preset.name && preset.name.toLowerCase() === languageName.toLowerCase()) {
                profile = preset;
                break;
            }
            else if (key.toLowerCase() === languageName.toLowerCase()) {
                profile = preset;
                break;
            }
        }
        if (!profile) {
            throw new Error(`Language profile '${languageName}' not found in presets and no real-word corpus was found.`);
        }
        // Use a predictable seed so the score for the same word and language is deterministic
        const rng = new RNG.RNG(12345);
        // Generate a corpus to analyze phonotactics
        const generator = new WordGenerator(rng, profile);
        sampleWords = Array.from(generator.generateSet(1000));
    }
    for (const sampleWord of sampleWords) {
        const formatted = "^" + sampleWord.toLowerCase() + "$";
        // Add bigrams
        for (let i = 0; i < formatted.length - 1; i++) {
            languageNGrams.add(formatted.substring(i, i + 2));
        }
        // Add trigrams
        for (let i = 0; i < formatted.length - 2; i++) {
            languageNGrams.add(formatted.substring(i, i + 3));
        }
    }
    const formattedWord = "^" + word.toLowerCase() + "$";
    const wordNGrams = [];
    // Extract bigrams from target word
    for (let i = 0; i < formattedWord.length - 1; i++) {
        wordNGrams.push(formattedWord.substring(i, i + 2));
    }
    // Extract trigrams from target word
    for (let i = 0; i < formattedWord.length - 2; i++) {
        wordNGrams.push(formattedWord.substring(i, i + 3));
    }
    if (wordNGrams.length === 0)
        return 0.0;
    // Calculate score based on how many n-grams exist in the language corpus
    let matches = 0;
    for (const ngram of wordNGrams) {
        if (languageNGrams.has(ngram)) {
            matches++;
        }
    }
    return matches / wordNGrams.length;
}
