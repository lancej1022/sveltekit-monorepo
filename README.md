# TODO:

- consolidate dependencies by moving them out of the individual package.json files and into the root package.json.
  - should make `pnpm i` faster overall as well as enforce a single-version policy, but still need to confirm if output bundles or tooling is affected
- Update toolchains such as `prettier` and `eslint` to extend from the root version. Might want to compare against an Nx repo to see how it works there
