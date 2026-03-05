const { test, expect } = require('@playwright/test');

test('DatePicker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator('#datepicker').fill('07/15/2023');

    await page.locator('#datepicker').click();

    const year = '2030';
    const month = 'March';
    const date = '20';

    while (true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        }
        await page.locator("[title='Next']").click();

    }

    const dates = await page.$$("//a[@class='ui-state-default']");

    for (const dt of dates) {
        if (await dt.textContent() === date) {
            await dt.click();
        }
    }

    await page.pause();
})