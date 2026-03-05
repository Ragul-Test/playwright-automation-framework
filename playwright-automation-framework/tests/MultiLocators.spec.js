const { test, expect } = require('@playwright/test');

test('LocateElements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const productList = await page.$$("//h4[@class='card-title']/a");
    for(const product of productList){
       const text = await product.textContent();
       console.log(text);
    }
})