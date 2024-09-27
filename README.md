# \<scl-comm-map-generator>

## What is this?

This is a menu type plugin for [open-scd-core](https://github.com/OpenEnergyTools/open-scd-core/blob/main/API.md), the new core editor engine for OpenSCD. With this plugin you automatically generate communication mappings between IEDs (control block -> external references) based on communication mappings between functions in the substation section.


> WARNING: This is a prototype and is not meant to be used in production. Please test first, if it does fit your needs.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

&copy; Alliander
