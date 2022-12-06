const { defineConfig } = require("cypress");

module.exports = defineConfig({
  _e2e: {
    baseUrl:'https://www.konga.com',
    setupNodeEvents(on, config) {
    },
  },
  get e2e() {
    return this._e2e;
  },
  set e2e(value) {
    this._e2e = value;
  },
});
