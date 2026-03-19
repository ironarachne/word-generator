/**
 * A rough approximation of English phonotactics.
 */
export const english = {
    name: "English",
    nounPatterns: ["pvp", "fvd", "nvf", "lvp", "pvdf", "fnv", "vpv", "vd", "pvl", "fvn", "nv", "lvf", "v", "vp", "pvppvp", "pvpfvd", "pvpnvf", "pvplvp", "pvpfnv", "pvpvpv", "pvpvd", "pvppvl"],
    verbPatterns: ["pv", "fvd", "nv", "lvp", "pvdf", "fnv", "vpv", "vd", "pvl", "fvn", "lv", "v", "vp", "pvppv", "pvpvd", "pvpnf", "plvp", "pfnv", "pvpv", "pvpvd", "ppvl"],
    articlePatterns: ["v", "vn", "fv"],
    adjectivePatterns: ["pv", "fvd", "nvf", "lvp", "vpv", "vd", "pvl", "fvn", "nv", "lvf", "v", "vp", "pvpv", "pvpfvd", "pnvf", "plvp", "pfnv", "pvpv", "pvd"],
    adverbPatterns: ["pv", "fvd", "nv", "lvp", "vpv", "vd", "pvl", "fvn", "lv", "v", "vp", "pvpv", "pvpfvd", "pnvf", "plvp", "pfnv", "pvpv", "pvd"],
    pronounPatterns: ["v", "cv", "vc", "fv", "nv", "pv", "lv"],
    prepositionPatterns: ["vc", "cv", "cvc", "vcc", "vcvc", "fvc", "pvc", "lvc"],
    conjunctionPatterns: ["vc", "cvc", "vcc", "cvcv", "vnc", "fvc", "pvc"],
    interjectionPatterns: ["v", "vc", "cv", "cvc", "fv", "fvc", "vcv"]
};
/**
 * A rough approximation of Xhosa phonotactics, highlighting clicks.
 */
export const xhosa = {
    name: "Xhosa",
    nounPatterns: ["pv", "fvfv", "vnv", "pvlvpv", "ξvp", "ξvfv", "nv", "nvfv", "lv", "pvpv", "pvfvfv", "pvvnv", "pvξvp", "pvξvfv", "pvnv", "pvnvfv", "pvlv"],
    verbPatterns: ["pvpv", "vpv", "pvlvpv", "ξvfv", "nvfv", "vnvfv", "pvvpv", "pvξv", "nvξv", "lvfv", "pvfvfv", "vnvnv", "pvlvfv"],
    articlePatterns: ["v", "pv", "lv", "nv", "vlv", "vnv"],
    adjectivePatterns: ["vpv", "vfv", "vnv", "vlv", "pvlv", "fvfv", "nvfv", "ξvfv", "pvpv", "pvfv"],
    adverbPatterns: ["pvpv", "fvfv", "nvnv", "lvlv", "pvlv", "ξvξv", "pvfv", "vpv", "vlv"],
    pronounPatterns: ["v", "lv", "nv", "vlv", "vnv", "vpv", "pv"],
    prepositionPatterns: ["nv", "pv", "lv", "v", "vnv", "vlv", "ξv"],
    conjunctionPatterns: ["pvpv", "vnv", "nvfv", "fvfv", "pvlv", "vpv"],
    interjectionPatterns: ["ξv", "ξvξv", "v", "fv", "pv", "vfv", "nv"]
};
/**
 * A rough approximation of Spanish phonotactics.
 */
export const spanish = {
    name: "Spanish",
    nounPatterns: ["pv", "fvd", "pvfv", "vpv", "fvn", "plv", "pfvfv", "vlvnv", "nv", "lv", "pvpv", "pvfvd", "pvpvfv", "pvvpv", "pvfvn", "pvplv", "pvnv", "pvlv"],
    verbPatterns: ["vlv", "plv", "pvfv", "pvlv", "vfv", "fvn", "vpv", "pvfvd", "vnv", "pvnv", "pvfvn", "pvvpv", "fvd", "pvpv", "fvdv"],
    articlePatterns: ["v", "lv", "nv"],
    adjectivePatterns: ["pfvfv", "pvfv", "vpv", "fvd", "vlvnv", "plv", "pvpv", "fvn", "pvlv", "pvfvd", "vfv", "pvnv"],
    adverbPatterns: ["vpv", "pvfv", "pfvfv", "vlvnv", "pvfvd", "fvn", "plv", "pvpv", "pvlv", "pvnv", "pvfvn"],
    pronounPatterns: ["v", "pv", "lv", "nv", "fv"],
    prepositionPatterns: ["pv", "nv", "v", "fvn", "lv", "pvfv"],
    conjunctionPatterns: ["v", "pv", "pvpv", "vpv", "nv"],
    interjectionPatterns: ["fv", "v", "pv", "vpv", "pvfv"]
};
/**
 * A rough approximation of Japanese phonotactics (Romanized).
 */
export const japanese = {
    name: "Japanese",
    nounPatterns: ["pv", "fvn", "v", "vn", "pvfv", "lvfvn", "vpv", "vnvn", "lv", "nv", "pvpv", "pvfvn", "pvvn", "pvpvfv", "pvvpv", "pvvnvn", "pvlv", "pvnv", "pvpvpv", "vpvpv"],
    verbPatterns: ["vpv", "pvlv", "nvlv", "pvpvv", "pvvpv", "pvfvn", "pvpvfv", "vnvn", "pvvn", "lvfv", "pvfv"],
    articlePatterns: ["pv", "v", "nv"],
    adjectivePatterns: ["vpvv", "vvpvv", "pvpvv", "pvlvv", "pvfvn", "vnvn", "pvpvfv", "vpvfv", "pvv"],
    adverbPatterns: ["pvpv", "pvvpv", "vpvpv", "pvpvpv", "fvn", "pvfvn", "vpv", "pvlv"],
    pronounPatterns: ["v", "pv", "vlv", "pvlv", "pvpv", "vpv", "pvnv", "fvn"],
    prepositionPatterns: ["pv", "v", "nv", "fv", "lv"],
    conjunctionPatterns: ["pvpv", "pvpvpv", "vpvpv", "fvn", "pvlv"],
    interjectionPatterns: ["v", "vv", "pv", "pvv", "vnv", "fvv", "nvv"]
};
/**
 * A rough approximation of Hawaiian phonotactics.
 */
export const hawaiian = {
    name: "Hawaiian",
    nounPatterns: ["v", "vv", "pv", "pvv", "vnv", "vlvv", "nvlv", "pvnvv", "lv", "nv", "vpvv", "vvnv", "vvlvv", "vnvlv", "vpvnvv", "vvvv", "vvpv", "vvpvv"],
    verbPatterns: ["vpv", "pvv", "nvv", "lvv", "vvlv", "pvnv", "vnvlv", "pvpv", "pvlv", "vvpv", "vvnv", "vpvv", "pvnvv"],
    articlePatterns: ["v", "pv", "nv"],
    adjectivePatterns: ["vv", "pvv", "nvv", "lvv", "vpvv", "vnvv", "vlvv", "vvpv", "vvnv", "vvlv", "pvpv", "pvnv", "pvlv", "vnvlv"],
    adverbPatterns: ["pvv", "nvv", "lvv", "vv", "vpv", "vnv", "vlv", "pvpv", "pvnv", "pvlv", "vvpv", "vvnv", "vvlv"],
    pronounPatterns: ["v", "vv", "pv", "nv", "lv", "vpv", "vnv", "vlv", "pvv", "nvv", "lvv"],
    prepositionPatterns: ["v", "pv", "nv", "lv", "vv"],
    conjunctionPatterns: ["v", "pv", "nv", "lv", "vv", "pvv", "nvv", "lvv"],
    interjectionPatterns: ["v", "vv", "vvv", "pv", "pvv", "nv", "nvv", "lv", "lvv"]
};
/**
 * A rough approximation of Finnish phonotactics.
 */
export const finnish = {
    name: "Finnish",
    nounPatterns: ["pv", "fvp", "vnv", "pvlv", "pvvd", "nvpnp", "v", "vn", "pvpv", "pvfvp", "pvvnv", "pvpvlv", "pvpvvd", "pvvn", "fvppv", "fvpfvp", "pvpvv"],
    verbPatterns: ["pvv", "pvlvv", "pvvnv", "fvpv", "nvpv", "vvpv", "pvpv", "pvpvlv", "pvpvn", "vpv", "vvn", "pvn"],
    articlePatterns: ["v", "pv", "fv"],
    adjectivePatterns: ["pvv", "fvpv", "nvpv", "pvpv", "pvpvlv", "vpv", "pvvn", "pvfvp", "vnv", "pvlv"],
    adverbPatterns: ["pvpv", "fvpv", "pvfvp", "pvvnv", "pvpvlv", "pvpvvd", "pvvn", "fvppv", "vnv", "vpv"],
    pronounPatterns: ["v", "pv", "fv", "vn", "pvv", "pvn", "vpv"],
    prepositionPatterns: ["pv", "fv", "v", "vn", "pvv", "pvn", "vpv", "vnv"],
    conjunctionPatterns: ["pv", "pvpv", "v", "vpv", "pvv", "fvpv", "vnv"],
    interjectionPatterns: ["v", "vv", "pv", "pvv", "fv", "fvv", "nv", "nvv"]
};
/**
 * A rough approximation of French phonotactics.
 */
export const french = {
    name: "French",
    nounPatterns: ["pv", "pvd", "plv", "nvf", "vlv", "pfvn", "lvfp", "pvpv", "pvpvd", "pvplv", "pvnvf", "pvvlv", "pvpfvn", "pvlvfp", "pvdpv", "pvl", "vnv", "fvl"],
    verbPatterns: ["pvf", "pvpv", "vlv", "pfv", "plv", "pvnv", "pvlv", "pvd", "vpv", "pvpf", "pvdp", "pvpn", "pvdf"],
    articlePatterns: ["lv", "nv", "pv", "v"],
    adjectivePatterns: ["pv", "pvd", "plv", "nvf", "vlv", "pfvn", "pvpv", "pvpvd", "pvplv", "pvpfvn", "pvlvfp", "pvdpv"],
    adverbPatterns: ["pvnv", "pvpv", "vlv", "pfvn", "pvplv", "pvnvf", "pvvlv", "pvpvd", "pvlvfp"],
    pronounPatterns: ["lv", "nv", "pv", "v", "pvv", "pvd"],
    prepositionPatterns: ["pv", "nv", "lv", "v", "pvd", "vlv", "plv"],
    conjunctionPatterns: ["pv", "v", "pvv", "pvd", "plv", "pvpv"],
    interjectionPatterns: ["fv", "v", "pv", "vpv", "pvd", "pvv", "nv"]
};
/**
 * A rough approximation of German phonotactics.
 */
export const german = {
    name: "German",
    nounPatterns: ["pvf", "pfvl", "nvlp", "pv", "vfv", "pfvpf", "fplvf", "pvfpvf", "pvfpv", "pvfvfv", "pfvlpv", "nvlppv", "pvpvf", "pvpfvl", "pvnvlp", "pfvlpvpf", "fplvfpvf"],
    verbPatterns: ["pvfn", "pfvln", "vpv", "pvfpvn", "pfvlpn", "pvfvn", "vfv", "pvf", "pfvl", "pvpvfn", "pfvlpvn"],
    articlePatterns: ["pv", "pvc", "cvc", "fv", "v", "vc"],
    adjectivePatterns: ["pvf", "pfvl", "nvlp", "pv", "vfv", "pfvpf", "fplvf", "pvfpvf", "pvfpv", "pvpvf", "pvpfvl"],
    adverbPatterns: ["pvf", "pfvl", "pvfpv", "pvfv", "pfvpf", "vfv", "pv", "pvfpvf", "pvpvf"],
    pronounPatterns: ["pv", "cv", "vc", "v", "pvf", "fvc", "cvc"],
    prepositionPatterns: ["vc", "cv", "pv", "cvc", "fvc", "pvf", "vcc"],
    conjunctionPatterns: ["vc", "cv", "pv", "cvc", "vcc", "pvf", "pvcv"],
    interjectionPatterns: ["v", "vc", "cv", "cvc", "pvf", "fvc", "vcv"]
};
/**
 * A rough approximation of Estonian phonotactics.
 */
export const estonian = {
    name: "Estonian",
    nounPatterns: ["pv", "lvf", "vnv", "pvlv", "pvdnp", "plvn", "nvvd", "pvpv", "pvlvf", "pvvnv", "pvpvlv", "pvplvn", "pvnvvd", "lvfpv", "lvflvf", "pvvpv", "pvvp"],
    verbPatterns: ["pv", "lvf", "vma", "pvlvma", "pvda", "plvda", "pvma", "pvdnd", "pvpv", "pvlvf", "pvvda", "pvpvlv", "pvplvn", "lvfma", "pvvp", "pvpva"],
    articlePatterns: ["v", "pv", "vnv"],
    adjectivePatterns: ["pv", "lvf", "pvdnp", "plvn", "pvpv", "pvlvf", "pvvnv", "pvpvlv", "pvplvn", "pvnvvd", "lvfpv", "pvvpv"],
    adverbPatterns: ["pvti", "lvfi", "pvdnpi", "pvpvi", "pvlvfi", "pvvnvi", "pvpv", "lvf", "pvlv", "plvn", "pvv"],
    pronounPatterns: ["nvm", "sv", "mv", "tv", "kv", "pv", "v", "pvv", "vn", "vnv"],
    prepositionPatterns: ["pv", "lv", "nv", "vn", "vv", "pvd", "pvv", "lvf"],
    conjunctionPatterns: ["jnv", "v", "pv", "nv", "kv", "pvv", "lvf", "pvpv"],
    interjectionPatterns: ["v", "vv", "pv", "pvv", "lvf", "nv", "nvv", "pvpv", "lv"]
};
/**
 * A rough approximation of Russian phonotactics (Romanized).
 */
export const russian = {
    name: "Russian",
    nounPatterns: ["pv", "fvf", "plv", "vpvn", "nvpf", "pnvp", "flpv", "pvpfp", "pvpv", "pvfvf", "pvplv", "pvvpvn", "pvnvpf", "pvpnvp", "pvflpv", "fvfpv"],
    verbPatterns: ["pvpv", "fvfv", "plvpv", "vpvnv", "nvpfv", "pnvpv", "flpvpv", "pvpfpv", "pvfvfv", "pvplvpv", "pvvpvn", "pvflpv", "fvfpv", "vpvpv"],
    articlePatterns: ["v", "pv", "nv"],
    adjectivePatterns: ["pvpvv", "fvfvv", "plvv", "vpvnvy", "nvpfvy", "pnvpvy", "flpvy", "pvpfpvy", "pvpvvy", "pvfvfvy", "pvplvy"],
    adverbPatterns: ["pvpv", "fvfv", "plvpv", "vpvnv", "nvpfv", "pnvpv", "flpv", "pvpvpv", "pvfvfv", "pvplv"],
    pronounPatterns: ["v", "pv", "fv", "vn", "nv", "pvv", "vnv", "lv", "cv"],
    prepositionPatterns: ["p", "f", "c", "v", "pv", "fv", "nv", "plv", "pvd", "cvc"],
    conjunctionPatterns: ["v", "pv", "fv", "nv", "vlv", "vnv", "pvv", "cvcv"],
    interjectionPatterns: ["v", "vv", "pv", "fv", "pvv", "fvv", "vp", "vc"]
};
/**
 * A rough approximation of Arabic phonotactics (Romanized).
 */
export const arabic = {
    name: "Arabic",
    nounPatterns: ["pv", "fvl", "nvfv", "pvnf", "plvn", "vfv", "pvpv", "pvfvl", "pvnvfv", "pvpvnf", "pvplvn", "pvvfv", "fvlpv", "fvlfvl", "pvcvcv"],
    verbPatterns: ["cvcvc", "cvccv", "vcvcv", "pvcpc", "fvccvc", "pvfvl", "pvpvn", "vfvcv"],
    articlePatterns: ["vl", "vlv"],
    adjectivePatterns: ["pvpv", "pvfvl", "pvnvfv", "pvpvnf", "pvplvn", "cvcv", "cvcvcv", "vcvcv", "vfc", "vpc"],
    adverbPatterns: ["pv", "fvl", "vfv", "pvpv", "pvfvl", "pvnvfv", "cvcv", "vcv", "pvvn", "fvfv"],
    pronounPatterns: ["hv", "hn", "n", "pv", "v", "hnv", "vnv", "cv", "cvv"],
    prepositionPatterns: ["f", "v", "pv", "fv", "lv", "nv", "p", "l", "b", "c"],
    conjunctionPatterns: ["v", "pv", "lv", "fv", "p", "f", "w"],
    interjectionPatterns: ["pv", "v", "vv", "pvv", "fv", "fvv", "nv", "vnv"]
};
/**
 * A rough approximation of Chinese phonotactics (Pinyin).
 */
export const chinese = {
    name: "Chinese",
    nounPatterns: ["pv", "pvn", "v", "vn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvvn", "pvfv", "pvfvn", "pvlv", "pvlvn", "pvnpv"],
    verbPatterns: ["pv", "pvn", "v", "vn", "fv", "fvn", "lv", "lvn", "pvpv", "pvfv", "pvpvn", "pvlv", "pvfvn", "vpv"],
    articlePatterns: ["v", "pv", "lv", "nv"],
    adjectivePatterns: ["pv", "pvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvfvn", "pvfv", "pvlv"],
    adverbPatterns: ["pv", "pvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvfv", "pvlv", "pvpvn"],
    pronounPatterns: ["wv", "nv", "tv", "v", "lv", "pvn", "fvn", "lvn"],
    prepositionPatterns: ["pv", "v", "zv", "cv", "lvn", "fvn", "pvn"],
    conjunctionPatterns: ["pv", "v", "pvpv", "pvn", "fvn"],
    interjectionPatterns: ["v", "vv", "pv", "pvv", "fv", "nv", "pvn"]
};
/**
 * A rough approximation of Korean phonotactics (Romanized).
 */
export const korean = {
    name: "Korean",
    nounPatterns: ["pv", "pvn", "v", "vn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvvn", "pvfv", "pvfvn", "pvlv", "pvlvn", "pvnpv"],
    verbPatterns: ["pvpv", "pvpvn", "pvfv", "vpv", "pvlv", "lvpv", "fvpvn", "pvfvn"],
    articlePatterns: ["v", "pv", "lv", "nv"],
    adjectivePatterns: ["pvpv", "pvpvn", "pvfv", "pvfvn", "vpv", "pvlv", "vtv"],
    adverbPatterns: ["pvpv", "pvpvn", "pvfv", "pvfvn", "vpv", "pvlv"],
    pronounPatterns: ["v", "pv", "nv", "lv", "fv", "pvn"],
    prepositionPatterns: ["v", "pv", "nv", "lv", "fv", "pvn"],
    conjunctionPatterns: ["pvpv", "vpv", "pvpvn", "pvfv"],
    interjectionPatterns: ["v", "vv", "pv", "pvv", "fv", "nv", "pvn"]
};
/**
 * A rough approximation of Thai phonotactics (Romanized).
 */
export const thai = {
    name: "Thai",
    nounPatterns: ["pv", "pvn", "plv", "plvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvplv", "pvplvn", "pvfv", "pvfvn", "pvlv", "pvlvn"],
    verbPatterns: ["pv", "pvn", "plv", "plvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvplv", "pvfv"],
    articlePatterns: ["pv", "pvn", "v"],
    adjectivePatterns: ["pv", "pvn", "plv", "plvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvpvn", "pvfv"],
    adverbPatterns: ["pv", "pvn", "plv", "plvn", "fv", "fvn", "lv", "lvn", "pvpv", "pvplv", "pvfv"],
    pronounPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "plv"],
    prepositionPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "plv"],
    conjunctionPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "plv", "pvpv"],
    interjectionPatterns: ["pv", "v", "vv", "fv", "pvn"]
};
/**
 * A rough approximation of Vietnamese phonotactics.
 */
export const vietnamese = {
    name: "Vietnamese",
    nounPatterns: ["pv", "pvn", "pwv", "pwvn", "v", "vn", "fv", "fvn", "lwvn", "pvpv", "pvpvn", "pvpwv", "pvpwvn", "pvvn", "pvfv", "pvfvn", "pvlwvn"],
    verbPatterns: ["pv", "pvn", "pwv", "pwvn", "v", "vn", "fv", "fvn", "lwvn", "pvpwv", "pvpwvn", "pvfv"],
    articlePatterns: ["v", "pv", "nv"],
    adjectivePatterns: ["pv", "pvn", "pwv", "pwvn", "v", "vn", "fv", "fvn", "lwvn", "pvpwvn", "pvpv"],
    adverbPatterns: ["pv", "pvn", "pwv", "pwvn", "v", "vn", "fv", "fvn", "lwvn", "pvpwv"],
    pronounPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "vn"],
    prepositionPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "vn"],
    conjunctionPatterns: ["pv", "v", "nv", "lv", "fv", "pvn", "vn", "pvpv"],
    interjectionPatterns: ["pv", "v", "vv", "fv", "pvn", "vn"]
};
/**
 * A rough approximation of Hindi phonotactics (Romanized).
 */
export const hindi = {
    name: "Hindi",
    nounPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    verbPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    articlePatterns: ["pv", "v"],
    adjectivePatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    adverbPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    pronounPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvpv", "pvfv"],
    prepositionPatterns: ["pv", "pvn", "fv", "lv", "nv", "v"],
    conjunctionPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvpv", "pvfv"],
    interjectionPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvpv", "pvfv"]
};
/**
 * A rough approximation of Portuguese phonotactics.
 */
export const portuguese = {
    name: "Portuguese",
    nounPatterns: ["pv", "fvd", "pvfv", "vpv", "fvn", "plv", "lv", "v", "nvv", "pvpv", "pvfvd", "pvpvfv", "pvvpv", "pvfvn", "pvplv", "pvlv", "pvnvv"],
    verbPatterns: ["pv", "fvd", "pvfv", "vpv", "fvn", "plv", "lv", "v", "nvv", "pvpv", "pvfvd", "pvpvfv", "pvvpv", "pvfvn", "pvplv", "pvlv", "pvnvv"],
    articlePatterns: ["v", "pv", "lv", "nvv"],
    adjectivePatterns: ["pv", "fvd", "pvfv", "vpv", "fvn", "plv", "lv", "v", "nvv", "pvpv", "pvfvd", "pvpvfv", "pvvpv", "pvfvn", "pvplv", "pvlv", "pvnvv"],
    adverbPatterns: ["pv", "fvd", "pvfv", "vpv", "fvn", "plv", "lv", "v", "nvv", "pvpv", "pvfvd", "pvpvfv", "pvvpv", "pvfvn", "pvplv", "pvlv", "pvnvv"],
    pronounPatterns: ["v", "pv", "fvn", "lv", "nvv"],
    prepositionPatterns: ["v", "pv", "fvn", "lv", "nvv"],
    conjunctionPatterns: ["v", "pv", "vpv", "fvn", "lv"],
    interjectionPatterns: ["v", "pv", "vpv", "fvn", "lv"]
};
/**
 * A rough approximation of Italian phonotactics.
 */
export const italian = {
    name: "Italian",
    nounPatterns: ["pv", "vpv", "plv", "fv", "vfv", "nv", "lvv", "pvpv", "pvvpv", "pvplv", "pvfv", "pvvfv", "pvnv", "pvlvv", "pvpvpv", "vpvpv"],
    verbPatterns: ["pv", "vpv", "plv", "fv", "vfv", "nv", "lvv", "pvpv", "pvvpv", "pvplv", "pvfv", "pvvfv", "pvnv", "pvlvv", "pvpvpv", "vpvpv"],
    articlePatterns: ["v", "lv", "lvv", "pv"],
    adjectivePatterns: ["pv", "vpv", "plv", "fv", "vfv", "nv", "lvv", "pvpv", "pvvpv", "pvplv", "pvfv", "pvvfv", "pvnv", "pvlvv", "pvpvpv", "vpvpv"],
    adverbPatterns: ["pv", "vpv", "plv", "fv", "vfv", "nv", "lvv", "pvpv", "pvvpv", "pvplv", "pvfv", "pvvfv", "pvnv", "pvlvv", "pvpvpv", "vpvpv"],
    pronounPatterns: ["v", "pv", "fv", "nv", "lvv"],
    prepositionPatterns: ["v", "pv", "fv", "nv", "lvv"],
    conjunctionPatterns: ["v", "pv", "vpv", "fv"],
    interjectionPatterns: ["v", "pv", "vpv", "fv"]
};
/**
 * A rough approximation of Indonesian phonotactics.
 */
export const indonesian = {
    name: "Indonesian",
    nounPatterns: ["pv", "vpv", "pvp", "fvn", "lvv", "nv", "vpvn", "pvpv", "pvvpv", "pvpvp", "pvfvn", "pvlvv", "pvnv", "pvvpvn", "vpvpv"],
    verbPatterns: ["pv", "vpv", "pvp", "fvn", "lvv", "nv", "vpvn", "pvpv", "pvvpv", "pvpvp", "pvfvn", "pvlvv", "pvnv", "pvvpvn", "vpvpv"],
    articlePatterns: ["pvp", "pv"],
    adjectivePatterns: ["pv", "vpv", "pvp", "fvn", "lvv", "nv", "vpvn", "pvpv", "pvvpv", "pvpvp", "pvfvn", "pvlvv", "pvnv", "pvvpvn", "vpvpv"],
    adverbPatterns: ["pv", "vpv", "pvp", "fvn", "lvv", "nv", "vpvn", "pvpv", "pvvpv", "pvpvp", "pvfvn", "pvlvv", "pvnv", "pvvpvn", "vpvpv"],
    pronounPatterns: ["pv", "vpv", "pvp", "nv", "pvpv"],
    prepositionPatterns: ["pv", "vpv", "pvp"],
    conjunctionPatterns: ["pv", "vpv", "pvp", "fvn", "pvpv"],
    interjectionPatterns: ["pv", "vpv", "pvp", "lvv", "nv", "pvpv", "pvvpv"]
};
/**
 * A rough approximation of Swahili phonotactics.
 */
export const swahili = {
    name: "Swahili",
    nounPatterns: ["pv", "fv", "nv", "lv", "npv", "nfv", "nlv", "v", "pvpv", "pvfv", "pvnv", "pvlv", "pvnpv", "pvnfv", "pvnlv", "fvpv"],
    verbPatterns: ["pv", "fv", "nv", "lv", "npv", "nfv", "nlv", "v", "pvpv", "pvfv", "pvnv", "pvlv", "pvnpv", "pvnfv", "pvnlv", "fvpv"],
    articlePatterns: ["pv", "fv", "nv"],
    adjectivePatterns: ["pv", "fv", "nv", "lv", "npv", "nfv", "nlv", "v", "pvpv", "pvfv", "pvnv", "pvlv", "pvnpv", "pvnfv", "pvnlv", "fvpv"],
    adverbPatterns: ["pv", "fv", "nv", "lv", "npv", "nfv", "nlv", "v", "pvpv", "pvfv", "pvnv", "pvlv", "pvnpv", "pvnfv", "pvnlv", "fvpv"],
    pronounPatterns: ["pv", "nv", "v", "pvpv"],
    prepositionPatterns: ["pv", "nv", "v"],
    conjunctionPatterns: ["pv", "nv", "v", "pvpv"],
    interjectionPatterns: ["pv", "fv", "nv", "v", "pvpv"]
};
/**
 * A rough approximation of Turkish phonotactics.
 */
export const turkish = {
    name: "Turkish",
    nounPatterns: ["pv", "pvp", "cv", "cvc", "fv", "nv", "lv", "v", "vc", "pvpv", "pvpvp", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlv", "pvvc"],
    verbPatterns: ["pv", "pvp", "cv", "cvc", "fv", "nv", "lv", "v", "vc", "pvpv", "pvpvp", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlv", "pvvc"],
    articlePatterns: ["pv", "cv", "v", "vc"],
    adjectivePatterns: ["pv", "pvp", "cv", "cvc", "fv", "nv", "lv", "v", "vc", "pvpv", "pvpvp", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlv", "pvvc"],
    adverbPatterns: ["pv", "pvp", "cv", "cvc", "fv", "nv", "lv", "v", "vc", "pvpv", "pvpvp", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlv", "pvvc"],
    pronounPatterns: ["pv", "cv", "v", "vc", "pvpv", "pvcv"],
    prepositionPatterns: ["pv", "cv", "v", "vc"],
    conjunctionPatterns: ["pv", "cv", "v", "vc", "pvpv", "pvcv", "cvc"],
    interjectionPatterns: ["pv", "cv", "v", "vc", "pvpv", "pvcv", "cvc", "pvp"]
};
/**
 * A rough approximation of Dutch phonotactics.
 */
export const dutch = {
    name: "Dutch",
    nounPatterns: ["pv", "fvp", "pvfv", "plvd", "nvf", "vlv", "pfvn", "lvfp", "pvpv", "pvfvp", "pvpvfv", "pvplvd", "pvnvf", "pvvlv", "pvpfvn", "pvlvfp"],
    verbPatterns: ["pv", "fvp", "pvfv", "plvd", "nvf", "vlv", "pfvn", "lvfp", "pvvlv", "pvpfvn", "pvlvfp", "pvpv", "pvfvp", "pvpvfv", "pvplvd"],
    articlePatterns: ["pv", "v", "nvv", "lv"],
    adjectivePatterns: ["pv", "fvp", "pvfv", "plvd", "nvf", "vlv", "pfvn", "lvfp", "pvpv", "pvfvp", "pvpvfv", "pvplvd"],
    adverbPatterns: ["pv", "fvp", "pvfv", "plvd", "nvf", "vlv", "pfvn", "lvfp", "pvpv", "pvfvp", "pvpvfv"],
    pronounPatterns: ["pv", "v", "nvv", "lv", "nvf", "fvp"],
    prepositionPatterns: ["pv", "v", "nvv", "lv", "nvf", "fvp"],
    conjunctionPatterns: ["pv", "v", "nvv", "lv", "nvf", "pvpv"],
    interjectionPatterns: ["pv", "v", "nvv", "lv", "nvf", "pvpv", "fvp"]
};
/**
 * A rough approximation of Greek phonotactics (Romanized).
 */
export const greek = {
    name: "Greek",
    nounPatterns: ["pv", "fv", "nv", "lv", "plv", "vpv", "pvp", "fvl", "pvpv", "pvfv", "pvnv", "pvlv", "pvplv", "pvvpv", "pvpvp", "pvfvl"],
    verbPatterns: ["vpv", "fv", "nv", "lv", "plv", "pvp", "fvl", "pvpv", "pvfv", "pvnv", "pvlv", "pvplv", "pvvpv", "pvpvp", "pvfvl"],
    articlePatterns: ["fv", "pv", "v"],
    adjectivePatterns: ["pv", "fv", "nv", "lv", "plv", "vpv", "pvp", "fvl", "pvpv", "pvfv", "pvnv", "pvvpv", "pvpvp"],
    adverbPatterns: ["pv", "fv", "nv", "lv", "plv", "vpv", "pvp", "fvl", "pvpv", "pvfv", "pvnv", "pvlv", "pvplv", "pvvpv", "pvfvl"],
    pronounPatterns: ["fv", "pv", "v", "nv", "lv"],
    prepositionPatterns: ["fv", "pv", "v", "nv", "lv"],
    conjunctionPatterns: ["fv", "pv", "v", "nv", "lv", "pvpv"],
    interjectionPatterns: ["fv", "pv", "v", "nv", "lv", "vpv"]
};
/**
 * A rough approximation of Hebrew phonotactics (Romanized).
 */
export const hebrew = {
    name: "Hebrew",
    nounPatterns: ["pv", "pvc", "cv", "cvc", "fv", "nv", "lvv", "v", "pvpv", "pvpvc", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlvv", "pvcpv"],
    verbPatterns: ["pv", "pvc", "cv", "cvc", "fv", "nv", "lvv", "pvpv", "pvpvc", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlvv", "pvcpv"],
    articlePatterns: ["pv", "fv"],
    adjectivePatterns: ["pv", "pvc", "cv", "cvc", "fv", "nv", "lvv", "pvpv", "pvpvc", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlvv"],
    adverbPatterns: ["pv", "pvc", "cv", "cvc", "fv", "nv", "lvv", "pvpv", "pvpvc", "pvcv", "pvcvc", "pvfv", "pvnv", "pvlvv"],
    pronounPatterns: ["pv", "fv", "v", "nv"],
    prepositionPatterns: ["pv", "fv", "cv"],
    conjunctionPatterns: ["pv", "fv", "cv", "v"],
    interjectionPatterns: ["pv", "fv", "cv", "v", "lvv"]
};
/**
 * A rough approximation of Polish phonotactics.
 */
export const polish = {
    name: "Polish",
    nounPatterns: ["pv", "fvp", "fpv", "pvf", "plv", "vnv", "pfvpf", "pvpv", "pvfvp", "pvfpv", "pvpvf", "pvplv", "pvvnv", "fvppv", "fvpfvp"],
    verbPatterns: ["pv", "fvp", "fpv", "pvf", "plv", "vnv", "pfvpf", "pvpv", "pvfvp", "pvfpv", "pvpvf", "pvplv", "pvvnv", "fvppv", "fvpfvp"],
    articlePatterns: ["pv", "fvp"],
    adjectivePatterns: ["pv", "fvp", "fpv", "pvf", "plv", "vnv", "pfvpf", "pvpv", "pvfvp", "pvfpv", "pvpvf", "pvplv", "pvvnv"],
    adverbPatterns: ["pv", "fvp", "fpv", "pvf", "plv", "vnv", "pfvpf", "pvpv", "pvfvp", "pvfpv", "pvpvf", "pvplv", "pvvnv"],
    pronounPatterns: ["pv", "fvp", "fpv", "pvf", "vnv"],
    prepositionPatterns: ["pv", "fvp", "fpv", "v"],
    conjunctionPatterns: ["pv", "v", "pvf", "vnv"],
    interjectionPatterns: ["fv", "pv", "vnv"]
};
/**
 * A rough approximation of Elvish phonotactics (Sindarin/Quenya inspired).
 */
export const elvish = {
    name: "Elvish",
    nounPatterns: ["lv", "lvv", "vlv", "vnlv", "fvl", "nvlv", "plv", "lvlv", "lvlvv", "lvvlv", "lvvnlv", "lvfvl", "lvnvlv", "lvplv", "lvvlvv"],
    verbPatterns: ["lv", "lvv", "vlv", "vnlv", "fvl", "nvlv", "plv", "lvlv", "lvlvv", "lvvlv", "lvvnlv", "lvfvl", "lvnvlv", "lvplv", "lvvlvv"],
    articlePatterns: ["lv", "v"],
    adjectivePatterns: ["lv", "lvv", "vlv", "vnlv", "fvl", "nvlv", "plv", "lvlv", "lvlvv", "lvvlv", "lvvnlv", "lvfvl", "lvnvlv", "lvplv"],
    adverbPatterns: ["lv", "lvv", "vlv", "vnlv", "fvl", "nvlv", "plv", "lvlv", "lvlvv", "lvvlv", "lvvnlv", "lvfvl", "lvnvlv", "lvplv"],
    pronounPatterns: ["lv", "lvv", "vlv", "nvlv", "plv"],
    prepositionPatterns: ["lv", "lvv", "v", "nvlv"],
    conjunctionPatterns: ["lv", "v", "lvv", "vlv"],
    interjectionPatterns: ["lv", "lvv", "vlv", "nvlv"]
};
/**
 * A rough approximation of Dwarvish phonotactics (Guttural/Harsh inspired).
 */
export const dwarvish = {
    name: "Dwarvish",
    nounPatterns: ["pvp", "pfv", "fvp", "pvlp", "vpn", "fpv", "pvppvp", "pvppfv", "pvpfvp", "pvpvpn", "pfvpvp", "pfvpfv", "pfvfvp", "pfvvpn"],
    verbPatterns: ["pvp", "pfv", "fvp", "pvlp", "vpn", "fpv", "pvppvp", "pvppfv", "pvpfvp", "pvpvpn", "pfvpvp", "pfvpfv", "pfvfvp", "pfvvpn"],
    articlePatterns: ["pvp", "fvp"],
    adjectivePatterns: ["pvp", "pfv", "fvp", "pvlp", "vpn", "fpv", "pvppvp", "pvppfv", "pvpfvp", "pvpvpn", "pfvpvp", "pfvpfv"],
    adverbPatterns: ["pvp", "pfv", "fvp", "pvlp", "vpn", "fpv", "pvppvp", "pvppfv", "pvpfvp", "pvpvpn", "pfvpvp", "pfvpfv"],
    pronounPatterns: ["pvp", "pfv", "fvp", "vpn"],
    prepositionPatterns: ["pvp", "pfv", "vpn", "fpv"],
    conjunctionPatterns: ["pv", "vpn", "fpv"],
    interjectionPatterns: ["pvp", "fvp", "pvppvp"]
};
/**
 * A rough approximation of Latin phonotactics.
 */
export const latin = {
    name: "Latin",
    nounPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    verbPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    articlePatterns: ["v", "cv"],
    adjectivePatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    adverbPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    pronounPatterns: ["v", "cv", "cvc", "vcv", "plv"],
    prepositionPatterns: ["v", "cv", "cvc", "pv", "vcv"],
    conjunctionPatterns: ["v", "cv", "cvc", "vcv", "pv"],
    interjectionPatterns: ["v", "cv", "vcv"]
};
/**
 * A rough approximation of Ukrainian phonotactics (Romanized).
 */
export const ukrainian = {
    name: "Ukrainian",
    nounPatterns: ["pv", "fv", "nv", "lv", "cvcv", "vcv", "pvpv", "pvfv", "pvnv", "pvlv", "pvvcv", "cvpv", "cvcv", "plv", "v"],
    verbPatterns: ["pv", "fv", "nv", "lv", "cvcv", "vcv", "pvpv", "pvfv", "pvnv", "pvlv", "pvvcv", "cvpv", "cvcv", "plv", "v"],
    articlePatterns: ["v", "pv", "fv", "nv"],
    adjectivePatterns: ["pv", "fv", "nv", "lv", "cvcv", "vcv", "pvpv", "pvfv", "pvnv", "pvlv", "pvvcv", "cvpv", "cvcv", "plv"],
    adverbPatterns: ["pv", "fv", "nv", "lv", "cvcv", "vcv", "pvpv", "pvfv", "pvnv", "pvlv", "pvvcv", "cvpv", "cvcv", "plv"],
    pronounPatterns: ["pv", "fv", "v", "cv", "nv"],
    prepositionPatterns: ["v", "pv", "fv", "cv"],
    conjunctionPatterns: ["v", "pv", "cv", "fv"],
    interjectionPatterns: ["v", "pv", "cv", "vcv"]
};
/**
 * A rough approximation of Punjabi phonotactics (Romanized).
 */
export const punjabi = {
    name: "Punjabi",
    nounPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    verbPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    articlePatterns: ["pv", "v", "nv"],
    adjectivePatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    adverbPatterns: ["pv", "pvn", "fv", "lv", "nv", "v", "pvlv", "pvpv", "pvpvn", "pvfv", "pvnv", "pvpvlv", "pvnpv", "pvnpvn", "pvnfv"],
    pronounPatterns: ["pv", "fv", "nv", "v", "pvn"],
    prepositionPatterns: ["pv", "nv", "lv", "v"],
    conjunctionPatterns: ["pv", "v", "nv", "fv"],
    interjectionPatterns: ["v", "pv", "fv", "lv"]
};
/**
 * A rough approximation of Maori phonotactics.
 */
export const maori = {
    name: "Maori",
    nounPatterns: ["v", "vv", "pv", "pvv", "nv", "nvv", "lv", "lvv", "fv", "fvv", "pvnv", "pvn", "vpv"],
    verbPatterns: ["v", "vv", "pv", "pvv", "nv", "nvv", "lv", "lvv", "fv", "fvv", "pvnv", "pvn", "vpv"],
    articlePatterns: ["v", "pv", "nv"],
    adjectivePatterns: ["v", "vv", "pv", "pvv", "nv", "nvv", "lv", "lvv", "fv", "fvv", "pvnv", "pvn", "vpv"],
    adverbPatterns: ["v", "vv", "pv", "pvv", "nv", "nvv", "lv", "lvv", "fv", "fvv", "pvnv", "pvn", "vpv"],
    pronounPatterns: ["v", "pv", "vv", "nv", "lv", "fv"],
    prepositionPatterns: ["v", "pv", "nv", "lv"],
    conjunctionPatterns: ["v", "pv", "nv", "lv", "vv"],
    interjectionPatterns: ["v", "vv", "pv", "pvv"]
};
/**
 * A rough approximation of Gaelic phonotactics.
 */
export const gaelic = {
    name: "Gaelic",
    nounPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    verbPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    articlePatterns: ["v", "pv", "cv"],
    adjectivePatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    adverbPatterns: ["pv", "cv", "cvc", "vcv", "plv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvplv", "cvpv", "cvcv", "cvcvc"],
    pronounPatterns: ["v", "pv", "cv", "cvc"],
    prepositionPatterns: ["v", "pv", "cv", "vcv"],
    conjunctionPatterns: ["v", "pv", "cv", "cvc"],
    interjectionPatterns: ["v", "pv", "cv"]
};
/**
 * A rough approximation of Mongolian phonotactics (Romanized).
 */
export const mongolian = {
    name: "Mongolian",
    nounPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    verbPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    articlePatterns: ["pv", "cv", "lv"],
    adjectivePatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    adverbPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    pronounPatterns: ["pv", "cv", "cvc", "vcv"],
    prepositionPatterns: ["pv", "cv", "cvc", "lv"],
    conjunctionPatterns: ["pv", "cv", "cvc", "vcv"],
    interjectionPatterns: ["pv", "cv", "cvc"]
};
/**
 * A rough approximation of Farsi (Persian) phonotactics (Romanized).
 */
export const farsi = {
    name: "Farsi",
    nounPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    verbPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    articlePatterns: ["v", "cv"],
    adjectivePatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    adverbPatterns: ["pv", "cv", "cvc", "vcv", "lv", "v", "pvpv", "pvcv", "pvcvc", "pvvcv", "pvlv", "cvpv", "cvcv", "cvcvc"],
    pronounPatterns: ["v", "cv", "cvc", "vcv"],
    prepositionPatterns: ["v", "cv", "cvc", "pv"],
    conjunctionPatterns: ["v", "cv", "cvc"],
    interjectionPatterns: ["v", "cv", "cvc", "vcv"]
};
/**
 * A rough approximation of Cherokee phonotactics (Romanized).
 */
export const cherokee = {
    name: "Cherokee",
    nounPatterns: ["v", "pv", "fv", "nv", "lv", "pvpv", "pvfv", "pvnv", "pvlv", "fvpv", "fvfv", "fvnv", "fvlv"],
    verbPatterns: ["v", "pv", "fv", "nv", "lv", "pvpv", "pvfv", "pvnv", "pvlv", "fvpv", "fvfv", "fvnv", "fvlv"],
    articlePatterns: ["v", "pv", "nv"],
    adjectivePatterns: ["v", "pv", "fv", "nv", "lv", "pvpv", "pvfv", "pvnv", "pvlv", "fvpv", "fvfv", "fvnv", "fvlv"],
    adverbPatterns: ["v", "pv", "fv", "nv", "lv", "pvpv", "pvfv", "pvnv", "pvlv", "fvpv", "fvfv", "fvnv", "fvlv"],
    pronounPatterns: ["v", "pv", "fv", "nv"],
    prepositionPatterns: ["v", "pv", "nv"],
    conjunctionPatterns: ["v", "pv", "fv", "nv"],
    interjectionPatterns: ["v", "pv", "fv"]
};
