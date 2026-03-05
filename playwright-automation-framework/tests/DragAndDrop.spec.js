const { test, expect } = require('@playwright/test');

test('DragAndDrop', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/drag-and-drop')


    const boxA = await page.locator('#column-a');
    const boxB = await page.locator('#column-b');
    
    await boxA.dragTo(boxB);

    await expect(boxB).toContainText('A')

    // await page.pause()


})