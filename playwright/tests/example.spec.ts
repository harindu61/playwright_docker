import { test, expect } from '@playwright/test';

test('has content 01', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 02', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 03', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 04', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 05', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 06', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 07', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 08', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 09', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});

test('has content 10', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hello from inside the very basic Node app!')).toBeVisible();
});
