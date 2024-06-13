// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    slowMo: 100,
  },
  timeout: 30000, // set default timeout for tests
});