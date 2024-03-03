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
- [CSS modules](https://vitejs.dev/guide/features.html#css-modules)
- [Sweet state](https://atlassian.github.io/react-sweet-state/)
- Since fixer.io is a REST api, using `fetch`

---

## Links

- Precommit lint-staged docs: <https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration>
