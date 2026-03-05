const { test, expect } = require('@playwright/test');

test('Built In  Locator', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    //getByLabel
    const username = await page.getByLabel('Username');
    await expect(username).toBeVisible();
    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type:'submit'}).click();
    //page.getByText() to locate by text content.
    const text = await page.getByText('Time at Work');
    await expect(text).toBeVisible();
})