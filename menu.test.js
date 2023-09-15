describe("Test for Clickable Menu",()=>{
    test("Menu",async () => {
     
    page=await browser.newPage();
    //const browser = await puppeteer.launch()
    // const page = await browser.newPage()
    // const navigationPromise = page.waitForNavigation()
    
    //await navigationPromise
    await page.goto('http://94.237.65.245:7788/')
    
    await page.setViewport({ width: 1920, height: 955 })
    const ptitle=await page.title();
    console.log(ptitle);
    const title= "Lou Geh Supermarket"
    expect(ptitle).toMatch(title);

    await page.waitForSelector('#product_menu')
    await page.click('#product_menu')
    new Promise(r=>setTimeout(r,1000));
    
    await page.waitForSelector('#supplier_menu')
    await page.click('#supplier_menu')
    new Promise(r=>setTimeout(r,1000));

    await page.waitForSelector('#customer_menu')
    await page.click('#customer_menu')
    new Promise(r=>setTimeout(r,1000));

    await page.waitForSelector('#purchase_menu')
    await page.click('#purchase_menu')
    new Promise(r=>setTimeout(r,1000));
},50000)});