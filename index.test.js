
describe('Test for Processing product Registration',()=>{
test("Add, Update, Delete Product",async () => {
page=await browser.newPage();
// const browser = await puppeteer.launch()
// const page = await browser.newPage()
// const navigationPromise = page.waitForNavigation()

//await navigationPromise

await page.goto('http://94.237.65.245:7788/')

await page.setViewport({ width: 1920, height: 955 })

await page.waitForSelector('#product_menu')
await page.click('#product_menu')
new Promise(r=>setTimeout(r,1000));

await page.waitForSelector('#addProduct')
await page.click('#addProduct')
 await page.waitForSelector('#barcode')
await page.type('#barcode',"12345",{delay:80})
new Promise(r=>setTimeout(r,1000));
// await page.waitForSelector('#description')
// await page.click('#description')

// await page.waitForSelector('#quantity')
// await page.click('#quantity')

// await page.waitForSelector('#cost_per_unit')
// await page.click('#cost_per_unit')

// await page.waitForSelector('#action')
// await page.click('#action')

// await page.waitForSelector('#41')
// await page.click('#41')

// await page.waitForSelector('#description')
// await page.click('#description')

// await page.waitForSelector('#action')
// await page.click('#action')


// await page.waitForSelector('#barcode')
// await page.click('#barcode')

// await page.waitForSelector('#barcode')
// await page.click('#barcode')

// await page.waitForSelector('#action')
// await page.click('#action')


// await page.waitForSelector('#quantity')
// await page.click('#quantity')

// await page.waitForSelector('#action')
// await page.click('#action')

// await page.waitForSelector('#cost_per_unit')
// await page.click('#cost_per_unit')

// await page.waitForSelector('#cost_per_unit')
// await page.click('#cost_per_unit')

// await page.waitForSelector('#action')
// await page.click('#action')
const ptitle=await page.title();
console.log(ptitle);
const title= "Lou Geh Supermarket"
expect(ptitle).toMatch(title);
//await browser.close()
})});