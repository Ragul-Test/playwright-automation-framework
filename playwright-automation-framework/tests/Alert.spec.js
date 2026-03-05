const { test, expect } = require('@playwright/test');

test.skip('assertion', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('alert');
        expect (dailog.message()).toContain('I am an alert box!');
        await dailog.accept();
    })

    await page.locator("//button[text()='Simple Alert']").click();




})

test('confirmationAlert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('confirm');
        expect (dailog.message()).toContain('Press a button!');
        // await dailog.accept();
        await dailog.dismiss();
    })

    await page.locator("//button[text()='Confirmation Alert']").click();



})


test('Prompt Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dailog =>{
        expect(dailog.type()).toContain('prompt');
        expect (dailog.message()).toContain('Please enter your name:');
        expect(dailog.defaultValue()).toContain('Harry Potter')
         await dailog.accept('Test');
        
    })

    await page.locator("//button[text()='Prompt Alert']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Test! How are you today?')



})