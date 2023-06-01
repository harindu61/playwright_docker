// @ts-check
const { test, expect } = require('@playwright/test');

async function getConsoleErrorLog(page) {
  page.on('console', async (msg) => {
    console.log(`\nPAGE: ${page.url()}`)
    console.log(`ERROR: ${msg.text()}`)
    console.log(`Location: ${msg.location().url}`)

    if (msg.args().length > 0) {
      console.log('ARG:')
      console.log(msg.args())
    }
    console.log('------------------------------')
  })
}

test('get started link', async ({ page }) => {
  getConsoleErrorLog(page)
  await page.goto('https://www.google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get estarted' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
