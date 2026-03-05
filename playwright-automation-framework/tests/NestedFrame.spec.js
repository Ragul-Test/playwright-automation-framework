const { test, expect } = require('@playwright/test');

test('Frames', async ({ page }) => {
     await page.goto('https://ui.vision/demo/webtest/frames/')
     const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame.locator("//input[@name='mytext3']").fill('Test');

    const childFrames = await frame.childFrames();
    await childFrames[0].locator("//span[text()='I am a human']").click();

    await page.pause()

})