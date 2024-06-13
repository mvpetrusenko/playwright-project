// pages/searchResultsPage.js

import BasePage from './basePage.js';

export default class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.resultsContainer = 'ytd-search';
  }

  async getResultsText() {
    await this.page.waitForSelector(this.resultsContainer, { state: 'visible', timeout: 60000 });
    const resultsText = await this.page.textContent(this.resultsContainer);
    console.log("Results Text: ", resultsText);
    return resultsText;
  }
}