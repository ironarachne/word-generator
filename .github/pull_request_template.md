## What changed

<!-- A short description of the change and why it is needed. -->

## Related issue

<!-- e.g. Closes #123. Write "None" if this is not tied to an issue. -->

## Type of change

- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Breaking change (changes existing behavior or the public API)
- [ ] Documentation or tooling only

## Generated output

- [ ] This change does **not** alter the words an existing pattern and seed
      already produce.
- [ ] It does alter them, and I have called that out below as a breaking
      change.

<!--
Adding or reordering elements in a set, changing how many times the generator
draws from the RNG, or changing the tokenizer all change every downstream word
for every existing seed. That is a major version bump. See CODE_STYLE.md.
-->

## Checklist

- [ ] `npm run check` passes locally (lint, build, tests).
- [ ] Tests cover the new behavior, including boundaries and thrown errors.
- [ ] TSDoc comments are updated for any changed public API.
- [ ] `README.md`'s symbol reference is updated if elements changed.
- [ ] The change follows [CODE_STYLE.md](../CODE_STYLE.md).
