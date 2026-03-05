import { test, expect } from '@playwright/test';

test('Validate product impression beacon - ASOS', async ({ page }) => {

  const networkCalls: string[] = [];

  page.on('request', request => {
    networkCalls.push(request.url());
  });

  await page.goto('https://www.asos.com/search/?q=shoes', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(5000);
  // Wait for products to load
  const firstProduct = page.locator("//p[text()='Regatta Risley mule waterproof shoe in black']");
 

  // Scroll into view
  await firstProduct.scrollIntoViewIfNeeded();

  await page.waitForTimeout(5000);
  await page.pause();
  const impressionTriggered = networkCalls.some(url =>
    url.includes('analytics') ||
    url.includes('impression') ||
    url.includes('collect')
  );

  expect(impressionTriggered).toBeTruthy();

});