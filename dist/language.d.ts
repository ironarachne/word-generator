/**
 * A profile describing a specific language's structural and phonetic constraints.
 *
 * @since 2.3.0
 */
export interface LanguageProfile {
    /** The name of the language (e.g., "English", "Xhosa") */
    name: string;
    /** Patterns used to generate nouns */
    nounPatterns: string[];
    /** Patterns used to generate verbs */
    verbPatterns: string[];
    /** Patterns used to generate articles */
    articlePatterns: string[];
    /** Patterns used to generate adjectives */
    adjectivePatterns: string[];
    /** Patterns used to generate adverbs */
    adverbPatterns: string[];
    /** Patterns used to generate pronouns */
    pronounPatterns: string[];
    /** Patterns used to generate prepositions */
    prepositionPatterns: string[];
    /** Patterns used to generate conjunctions */
    conjunctionPatterns: string[];
    /** Patterns used to generate interjections */
    interjectionPatterns: string[];
}
