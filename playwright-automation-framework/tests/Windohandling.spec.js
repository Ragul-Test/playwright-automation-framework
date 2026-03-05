const { test, expect ,chromium } = require('@playwright/test');



test('Prompt Alert', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await expect(page).toHaveTitle('OrangeHRM');
     const newPage = context.waitForEvent('page');
   await page.locator("//a[text()='OrangeHRM, Inc']").click();
   await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
   await page.bringToFront();
   await expect(page).toHaveTitle('OrangeHRM');
})