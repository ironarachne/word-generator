/**
 * Calculates a score between 0.0 and 1.0 indicating how similar a word sounds
 * to a specific language profile based on comparative linguistics (n-gram analysis).
 *
 * @param word The word to score.
 * @param languageName The name of the language (e.g., "English", "Spanish") or a key in Presets.
 * @returns A score between 0.0 and 1.0, where 0.0 means very dissimilar and 1.0 means exactly like the language.
 */
export declare function getLinguisticScore(word: string, languageName: string): number;
