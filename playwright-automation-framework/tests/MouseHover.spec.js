const { test, expect } = require('@playwright/test');

test('WebTable', async ({ page }) => {

    page.goto('https://demoqa.com/menu')
    await page.pause();
    const mainList = page.locator('text=Main Item 2');
    const subList = page.locator('text=SUB SUB LIST »');
    await mainList.hover();
    await subList.hover();


})