const { test, expect } = require('@playwright/test');

test('DoubletClick', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btncopy = await page.locator("//button[text()='Copy Text']");

    await btncopy.dblclick();

    const f2 = await page.locator("#field2")

    await expect(f2).toHaveValue('Hello World!');

    await page.pause();


})