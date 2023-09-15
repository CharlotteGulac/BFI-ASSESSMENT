describe('Test for Processing Customer Purchase',()=>{
    test("Add Purchase ",async () => {

await page.waitForSelector('#addPurchase')
await page.click('#addPurchase')
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#pid')
await page.click('#pid')
new Promise(r=>setTimeout(r,1000));

await page.selectOption('#pid', '42')
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#pid')
await page.click('#pid')
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#quantity')
await page.type('#quantity',"20",{delay:80})
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#unit_price')
await page.type('#unit_price',"10",{delay:80})
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#action')
await page.click('#action')

},50000)});