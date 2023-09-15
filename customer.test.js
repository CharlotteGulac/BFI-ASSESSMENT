describe('Test for Processing Customer Registration',()=>{
    test("Add Customer ",async () => {
       
await page.goto('http://94.237.65.245:7788/customer.php')

await page.setViewport({ width: 1920, height: 955 })

await page.waitForSelector('#addCustomer')
await page.type('#addCustomer')
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#name')
await page.type('#name',"customerA",{delay:80})
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#mobile')
await page.type('#mobile',"123456",{delay:80})
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#address')
await page.type('#address',"Koronadal",{delay:80})
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#action')
await page.type('#action')


   
},50000)});