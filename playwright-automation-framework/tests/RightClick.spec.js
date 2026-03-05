const { test, expect } = require('@playwright/test');

test.only('RightClick', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightClick = await page.locator("//span[text()='right click me']");
    await rightClick.click({button : 'right'});
    await page.pause();


})