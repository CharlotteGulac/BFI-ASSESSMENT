describe('Test for Processing Product Registration',()=>{
    test("Add Product ",async () => {
    
    page=await browser.newPage();

    await page.goto('http://94.237.65.245:7788/product.php')

    await page.setViewport({ width: 1920, height: 955 })

    await page.waitForSelector('#product_menu')
    await page.click('#product_menu')
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#addProduct')
    await page.click('#addProduct')
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#barcode')
    await page.type('#barcode',"12345",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#description')
    await page.click('#description',"Cream Bread",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#quantity')
    await page.click('#quantity',"5",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#cost_per_unit')
    await page.click('#cost_per_unit',"20",{delay:80})
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#action')
    await page.click('#action')
    
    
    },50000)});
