const { test, expect } = require('@playwright/test');

test('assertion', async ({ page }) => {


    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

     await expect(page).toHaveTitle('nopCommerce demo store. Register');

     const logo = await page.locator('.header-logo img');

     await expect(logo).toBeVisible();

     const searchBox = await page.locator('#small-searchterms');
     await expect(searchBox).toBeEnabled();
    //  await expect(searchBox).toBeDisabled();

   const radioBtn =  await page.locator('#gender-male');
   radioBtn.click();
   await expect(radioBtn).toBeChecked();

   const newsCheckBox =await page.locator('#NewsLetterSubscriptions_0__IsActive');
    await expect(newsCheckBox).toBeChecked();


    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

     const regText = await page.locator('.page-title h1');
    await expect(regText).toHaveText('Register');
     await expect(regText).toContainText('Regi');

     const inputBox = await page.locator('#Email');
     await inputBox.fill('test@123');
     await expect(inputBox).toHaveValue('test@123');

})