import { test, expect } from '@playwright/test';

test('playwright web test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});

test('facebook web test', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await expect(page).toHaveScreenshot();
});