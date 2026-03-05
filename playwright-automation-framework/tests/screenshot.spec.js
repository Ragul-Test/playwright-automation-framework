import { test, expect } from '@playwright/test';


test('Home Page Test', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshot/'+Date.now()+'HomePage.png'});

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshot/'+Date.now()+'FullPage.png', fullPage: true});


})