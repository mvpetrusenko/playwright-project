// npm install @playwright/test - for running test(...)
// "node --trace-warnings . " - detailed error tracing in Node.js to get more information
// "npx playwright test --debug" - running tests with debugging

// pages/basePage.js

export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }
}