# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Setup

Nothing builds until `react-arsenal` is cloned into the gitignored vendor path the
`@ra` alias resolves to. See `README.md` for the clone command and run scripts.

Always clone it from `github.com/nepware-dev/react-arsenal`, the same source CI uses.
An old `gitlab.com/nepware-internals/react-arsenal` mirror still exists and still
resolves, but it is the pre-TypeScript library and is React 19 incompatible — it sets
props via `Component.defaultProps`, which React 19 ignores for function components,
so components silently receive `undefined` props (`SliderInput` throws outright).

## Sharp edges

- `react-arsenal` ships its own `node_modules`, so `.storybook/main.mjs` dedupes
  `react`/`react-dom` onto this project's copy. Removing that dedupe loads two Reacts.
- CI clones `react-arsenal` without installing its dependencies, so this project's
  `dependencies` deliberately carry the vendor's runtime deps (`hoist-non-react-statics`,
  `prop-types`, `react-icons`, `whatwg-fetch`, ...). Dropping one breaks the CI build only.
- Story files must be `.jsx`, not `.js` — Storybook's Vite builder parses story
  modules by extension and rejects JSX inside `.js`.
- `react-arsenal` targets React 19 and relies on ref-as-prop, so React must stay >= 19
  here. On React 16 its `Tabs` crashes outright.
- Some vendor components spread unknown props onto DOM nodes, so `Components/Tabs`
  logs React "unrecognized prop" warnings. That is vendor-side, not a config problem.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
