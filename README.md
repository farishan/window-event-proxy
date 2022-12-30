My browser game needs to add event listener to `window` object, and needs to monitor all listener key and value.

This module is exactly for that requirements.

---

Dev notes:
`rollup.config.js` contains 2 method, for building `bundle-dev.js` (for testing purpose with `index.html`) and `bundle.js` (distributable).

How to preview:
Open `index.html` in browser

How to developing:
- Modify `index.js`
- Change `rollup.config.js` to dev mode
- Use rollup to build the scripts
- Refresh `index.html`