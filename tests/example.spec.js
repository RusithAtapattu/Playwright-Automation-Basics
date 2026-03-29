// Import test and expect from Playwright
const { test, expect } = require('@playwright/test');

// Declare variables to reuse across tests
let context;
let page;

// This runs ONCE before all tests
test.beforeAll(async ({ browser }) => {

  // Create a new browser context (like a fresh browser session)
  context = await browser.newContext();

  // Start tracing (records screenshots, DOM snapshots, etc.)
  await context.tracing.start({
    screenshots: true,
    snapshots: true
  });

  // Create a new page (tab) inside the context
  page = await context.newPage();
});


// This runs ONCE after all tests finish
test.afterAll(async () => {

  // Stop tracing and save it as a zip file
  await context.tracing.stop({ path: 'test2_trace.zip' });

  // Close the page
  await page.close();

  // Close the browser context
  await context.close();
});


// Test case 1
test('has title', async () => {

  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Verify the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});


// Test case 2
test('get started link', async () => {

  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify that "Installation" heading is visible
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});