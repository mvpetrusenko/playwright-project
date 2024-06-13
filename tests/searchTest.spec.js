// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('/');

//   // Expect url to have expected value.
  
//   await expect(page).toHaveURL('https://www.youtube.com');
// }); 












// const { chromium } = require('playwright');
// (async () => {
//  // Launch a browser instance
//  const browser = await chromium.launch();
//  const context = await browser.newContext();
//  const page = await context.newPage();
//  // Navigate to a webpage
//  await page.goto('https://example.com');
//  // Check for the existence of an element
//  const title = await page.title();
//  console.log(`Title: ${title}`); // Should print "Example Domain"
//  // Locate an element by its text content
//  const element = await page.$('text=More information');
//  if (element) {
//    console.log('Element found');
//  } else {
//    console.log('Element not found');
//  }
//  // Close the browser
//  await browser.close();
// })();