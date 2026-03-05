const { test, expect } = require('@playwright/test');

test('WebTable', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
 await page.locator("//h2[text()='Pagination Web Table']").scrollIntoViewIfNeeded();
    const table = await page.locator("#productTable");
   

    //scenario
    const coloumns = await table.locator(' thead tr th')
    console.log('Number of coloumns ', await coloumns.count())
    expect(await coloumns.count()).toBe(4);

    const rows = await table.locator(' tbody tr')
    console.log('Number of Rows ', await rows.count())
    expect(await rows.count()).toBe(5);

    // //scenario 2

    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })

    // await matchedRow.locator('//input[@type="checkbox"]').check();

    // await page.pause();


    // //scenario 3 
    // await selectProduct(rows, page, "Smartphone")
    // await selectProduct(rows, page, "Laptop")
    // await selectProduct(rows, page, "Wireless Earbuds")
    // await page.pause();


    //scenario 4 

    for(let i =0 ; i< await rows.count();i++){
        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j =0; j < await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent());
        }

    }


    //print all the products using the pagination

    const pages = await page.locator('.pagination li a');

    for(let p = 0 ; p< await pages.count();p++){

        if(p>0){
            await pages.nth(p).click();
        }
        
        
    for(let i =0 ; i< await rows.count();i++){
        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j =0; j < await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent());
        }

    }



    }





})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        hasText: name
    })

    await matchedRow.first().locator('//input[@type="checkbox"]').check();

}