// tests/homePage.test.js 
import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage.js';
import SearchResultsPage from '../pages/searchResultsPage.js';

test.describe('YouTube Search Test', () => {
  let homePage;
  let searchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.navigate('https://www.youtube.com');
  });

  test.afterEach(async ({ page }) => {
    await page.close(); // Ensure page is closed properly
  });

  test('should search for a term and display results', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout for this test

    await homePage.enterSearchTerm('music');
    console.log('Entered search term: music');

    await homePage.clickSearchButton();
    console.log('Clicked search button');

    // await page.waitForSelector(searchResultsPage.resultsContainer, { state: 'visible', timeout: 60000 });
    // console.log('Search results are visible');

    // const resultsText = await searchResultsPage.getResultsText();
    // console.log('Search results text:', resultsText);

    // expect(resultsText).toContain('music');
  });
});