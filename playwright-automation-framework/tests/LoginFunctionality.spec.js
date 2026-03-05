const { test, expect } = require('@playwright/test');

test('Login Functionality',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator('id=login2').click();   //property 

    await page.locator('#loginusername').fill('pavanol'); //css

    await page.locator('#loginpassword').fill('test@123');//css

    await page.locator("//button[text()='Log in']").click(); //xpath

    const logoutLink = await page.locator("//a[text()='Log out']"); //xpath

    await expect(logoutLink).toBeVisible();

})