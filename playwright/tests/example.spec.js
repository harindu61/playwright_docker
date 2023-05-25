// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://172.17.0.1:3000');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});
