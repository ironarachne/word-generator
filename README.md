# Word Generator

This is a library for generating random fictional words.

It exports the following:

- `allElements`: A constant array of `WordElementSet` objects. Used internally, but exported in case you need a reference.
- `WordElementSet`: A class for describing parts of a word. Used internally.
- `WordGenerator`: The main tool of this package. Has a single parameter `patterns` that it uses to generate a word via the method `generate()`. It always generates one string result based on the patterns given.
