const { test, expect } = require('@playwright/test');

test('radio Button', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkBox = page.locator("//input[@value='sunday']")
    const monday = page.locator("//input[@value='monday']")
    await checkBox.check();
    await expect(checkBox).toBeChecked();
    await expect(await checkBox.isChecked()).toBeTruthy();
    await expect(await monday.isChecked()).toBeFalsy();
     await page.pause();
    const checkBoxes = ["//input[@value='wednesday']","//input[@value='thursday']","//input[@value='friday']"]
    for(const checks of checkBoxes){
        await page.locator(checks).check();
    }
    await page.pause();

})