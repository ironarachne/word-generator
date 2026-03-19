# Word Generator

This is a library for generating random fictional words based on phonetic patterns.

Documentation is available [here](https://word-generator.ironarachne.com/docs).

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
| `r` | Glottals | h, ? |
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
| `β` | Front Vowels | i, e, æ |
| `γ` | Back Vowels | u, o, ɔ, ɑ |
| `δ` | Rounded Vowels | o, u |
| `ε` | Unrounded Vowels | a, e, i |
| `ζ` | Voiceless Fricatives | f, th, s, sh, h |
| `η` | Voiced Fricatives | v, dh, z, zh |
| `θ` | Voiceless Stops | p, t, k, c, q |
| `ι` | Voiced Stops | b, d, g |
