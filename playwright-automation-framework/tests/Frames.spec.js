const { test, expect } = require('@playwright/test');

test('Frames', async ({ page }) => {
     await page.goto('https://ui.vision/demo/webtest/frames/')
     //approach 1
    //  await page.frame('name');
    // const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame.locator("//input[@name='mytext1']").fill('Test');
    // await page.pause();
    //approach2
    const frame2 = await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']");
    await frame2.fill('Hello');
    await page.pause();


})