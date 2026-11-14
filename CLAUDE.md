# Physical Open Waters website: rules for this repository

- This repository is a documentation site. It uses mkdocs-material. Netlify publishes it from `master`.
- Do not push to `master`. Open a pull request.
- To see the site before you open a pull request, run `mkdocs serve`.
- Release notes are in `docs/release-notes.md`, under the Stable or the Experimental tab.

<!-- writing-rules v1: keep this section the same in all PhysicalAddons repositories -->
## Writing rules (ASD-STE100)

Write all text for people in ASD-STE100 Simplified Technical English. This includes pull request titles and descriptions, commit messages, release notes, documentation and text in the user interface.

Before you post or commit text, check each sentence:

- The sentence has a subject and a verb. Do not write fragments.
- The sentence gives one fact or one instruction.
- An instruction has no more than 20 words. A description has no more than 25 words.
- Use the active voice. Write instructions as commands: "Save the file."
- Use only these verb forms: infinitive, imperative, simple present, simple past, future ("will"), and the past participle as an adjective.
- Keep the articles: "the file", not "file".
- Do not use contractions. Do not omit words to make a sentence shorter.
- Use simple, common words. Do not use idioms, slang or phrasal verbs.
- Use one term for one thing. Do not use synonyms to vary the text.
- Do not use semicolons.
- Use a vertical list for three or more items or steps.
- Put a warning or a condition before the step that it applies to.
- A paragraph has one topic and no more than six sentences.
- Write only the facts that the reader needs.

Example. Do not write: "Release fix, run by hand on main." Write: "This change fixes the release. You start the workflow manually on `main`."

Do not mention Claude or other AI tools in commits, pull requests, branch names or code. Do not add "Co-Authored-By" or "Generated with" lines.
