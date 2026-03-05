const { test, expect } = require('@playwright/test');

test('radio Button', async ({ page }) => {
await page.goto('https://demoqa.com/radio-button');

await page.locator("//label[@for='yesRadio']").check();
await expect(page.locator("//label[@for='yesRadio']")).toBeChecked();
await expect(await page.locator("//label[@for='yesRadio']").isChecked()).toBeTruthy();
await expect(await page.locator('#impressiveRadio').isChecked()).toBeFalsy();

await page.pause();


})