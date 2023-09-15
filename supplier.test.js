describe('Test for Processing supplier Registration',()=>{
    test("Add Supplier ",async () => {
     
    page=await browser.newPage();

    await page.goto('http://94.237.65.245:7788/supplier.php')

    await page.setViewport({ width: 1920, height: 955 })
    
    await page.waitForSelector('#addSupplier')
    await page.click('#addSupplier')
    new Promise(r=>setTimeout(r,1000));

    await page.waitForSelector('#company_name')
    await page.type('#company_name',"company123",{delay:80})
    new Promise(r=>setTimeout(r,1000));

    await page.waitForSelector('#mobile')
    await page.type('#mobile',"12345",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#address')
    await page.type('#address',"Koronadal",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#action')
await page.click('#action')

//new Promise(r=>setTimeout(r,1000));
    //validation for blanked input

//     await page.waitForSelector('#alert-roles-access')
//     const data = await page.evaluate(() =>{
// let Invalid= document.querySelector("#alert-roles-access").innerText;return Invalid;
//     });
//     console.log(data);
//     expect(data).toMatch("Requested information should be provided!");

   // await browser.close()
    },50000)});

    describe('Test for Processing supplier Registration',()=>{
        test("Edit Supplier ",async () => {
    
            await page.waitForSelector('#22')
            await page.click('#22')
            new Promise(r=>setTimeout(r,10000));

            await page.waitForSelector('#company_name')
            await page.type('#company_name',"company111",{delay:80})
            new Promise(r=>setTimeout(r,1000));

            await page.waitForSelector('#mobile')
            await page.type('#mobile',"00012345",{delay:80})
            new Promise(r=>setTimeout(r,1000));

            await page.waitForSelector('#address')
            await page.type('#address',"Koronadal City",{delay:80})
            new Promise(r=>setTimeout(r,1000));

            await page.waitForSelector('#action')
            await page.click('#action')
        },50000)});
        