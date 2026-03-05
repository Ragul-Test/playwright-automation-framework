const {test, expect}=require('@playwright/test')

test.only('Auto suggest dropdown', async ({page}) =>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#srcinput').fill('Delhi');
    await page.waitForTimeout(5000)

    // select options from dropdown
    const fromCityOptions=await page.$$("//div[@role='heading']")
    console.log("value is",fromCityOptions)
    for(let option of fromCityOptions)
    {
        const value=(await option.textContent()).trim();
       console.log("value is",value)
       await page.pause()
       if(value.includes('Near Delhi Airport, Delhi'))
        {
            await option.click();
            break
        }

    }
await page.pause()
   
})