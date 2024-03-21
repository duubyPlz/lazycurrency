# lazycurrency

AUD ↔ TWD/MYR/HKD (mainly for TWD) for the lazy.

- Updates conversion rate if online (fixer.io api)
- If offline, uses last known conversion rate

---

## Setup steps

- `npm install`
- `npm start` to start dev

### Stack

- React, Vite, prettier & eslint (with husky &
  lint-staged for precommits)
- [Compiled CSS-in-JS](https://compiledcssinjs.com)
  - Have to also install `@babel/plugin-transform-react-jsx` to fix
    `jsxDEV` not defined error
- [Sweet state](https://atlassian.github.io/react-sweet-state/)
- Since fixer.io is a REST api, using `fetch`

---

## Links

- Precommit lint-staged docs: <https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration>
- Vite & compiled <https://github.com/atlassian-labs/compiled/issues/1237>
- `Shifter` and width, using `offsetWidth` <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth>
- Vite to Github Pages <https://dev.to/tharakamts/how-to-deploy-your-react-or-vite-project-on-github-pages-using-gh-pages-d7f>
