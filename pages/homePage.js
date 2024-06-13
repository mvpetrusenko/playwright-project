// pages/homePage.js

import BasePage from './basePage.js';

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = 'input#search';
    this.searchButton = 'button#search-icon-legacy';
  }

  async enterSearchTerm(term) {
    await this.page.fill(this.searchInput, term);
  }

  async clickSearchButton() {
    await this.page.waitForSelector(this.searchButton, { state: 'visible' });
    await this.page.click(this.searchButton);
  }
}