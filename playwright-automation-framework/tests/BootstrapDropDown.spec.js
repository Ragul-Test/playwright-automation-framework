const { test, expect } = require('@playwright/test');

test('Bootstrap', async ({ page }) => {
   await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-dual-list-box-demo");
   const options = page.locator('.list-left li');
   const count = await options.count();

   //3

   for(let i = 0 ; i <= count ;i++ ){
        const text = (await options.nth(i).textContent()).trim();

        if(text.includes('Kedungjenar') || text.includes('Danville')){
            await options.nth(i).click()
             await page.locator('.move-right').click()
        }
        // await page.locator('.move-right').click()
        // await page.pause();


   }






})