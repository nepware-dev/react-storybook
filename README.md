# react-storybook

Storybook workbench for the [react-arsenal](https://github.com/nepware-dev/react-arsenal) component library.

## Requirements

- Node 24 (see `.nvmrc` — run `nvm use`)
- Yarn 1

## Setup

`react-arsenal` is not a dependency and not a submodule. It is cloned into a
gitignored vendor directory that the `@ra` alias points at:

```sh
git clone https://github.com/nepware-dev/react-arsenal src/vendor/react-arsenal
yarn install
```

## Running

```sh
yarn start   # storybook dev on http://localhost:9009
yarn build   # static build into storybook-static/
```

## Stack

Storybook 10 on the Vite builder, React 19. The `@ra` alias and the React dedupe
(needed because `react-arsenal` carries its own `node_modules`) live in
`.storybook/main.mjs`.
