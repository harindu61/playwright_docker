// @ts-check
const { test, expect } = require('@playwright/test');

test('has body test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

