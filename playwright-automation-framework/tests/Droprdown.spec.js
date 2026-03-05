const { test, expect } = require('@playwright/test');

test('radio Button', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#country').scrollIntoViewIfNeeded();
    await page.locator('#country').selectOption('Australia');// visible Text
    //  await page.locator('#country').selectOption({value : 'uk'}); //using value 
    //  await page.locator('#country').selectOption({index: 3});
    // usnoing index
    //   await page.locator('#country').selectOption({label:'india'});// label by vissible text
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();

    const opt = await page.$$('#country option');
    for (const checks of opt) {
        let value = await checks.textContent();
        console.log(value);
        if (value.includes('France')) {
            await page.locator("#country").selectOption({ label: value.trim() });
        }
    }



    await page.pause();

})