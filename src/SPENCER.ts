const puppeteer = require('puppeteer');

async function purchase() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  
  let frames = await page.frames()
  const frame_9440 = frames.find((f: { url: () => string; }) => f.url() === 'https://secure.newegg.com/payment/edit?tk=3104375f82194757bf6214fda958e8eb001&sessionId=OSILTMK8KEIK8N43515')
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://secure.newegg.com/Shop/Cart')
  await navigationPromise

  await page.waitForSelector('#app > div.page-content > section > div > div > form > div.row-inner > div.row-body > div.item-cells-wrap.tile-cells.items-list-view.empty-cells > div > div > div > div > p > a:nth-child(7)')
  await page.click('#app > div.page-content > section > div > div > form > div.row-inner > div.row-body > div.item-cells-wrap.tile-cells.items-list-view.empty-cells > div > div > div > div > p > a:nth-child(7)')



  
  // await page.goto('https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16820313309')
  // await navigationPromise

  // await page.goto('https://secure.newegg.com/Shop/Cart?ItemList=N82E16820313309')
  // await navigationPromise


  
  // await page.setViewport({ width: 1680, height: 841 })
  
  // await page.waitForSelector('.summary-side > .summary-wrap > .summary-content > .summary-actions > .btn')
  // await page.click('.summary-side > .summary-wrap > .summary-content > .summary-actions > .btn')
  
  // await navigationPromise
  
  // await page.waitForSelector('.signin-step-1 > form > .form-cells > .form-cell > .btn-gray')
  // await page.click('.signin-step-1 > form > .form-cells > .form-cell > .btn-gray')
  
  // await navigationPromise
  
  // await page.waitForSelector('.checkout-tab-content > .item-cells-wrap > .item-cell > .card > span')
  // await page.click('.checkout-tab-content > .item-cells-wrap > .item-cell > .card > span')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(1) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(1) > .form-text')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(2) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(2) > .form-text')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell > .address-autocomplete-input')
  // await page.click('.modal-body > form > .form-cells > .form-cell > .address-autocomplete-input')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(7) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(7) > .form-text')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(8) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(8) > .form-text')
  
  // await page.waitForSelector('form > .form-cells > .form-cell:nth-child(9) > .form-select > select')
  // await page.click('form > .form-cells > .form-cell:nth-child(9) > .form-select > select')
  
  // await page.select('form > .form-cells > .form-cell:nth-child(9) > .form-select > select', 'AL')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(10) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(10) > .form-text')
  
  // await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > form > .form-cells')
  // await page.click('.modal-dialog > .modal-content > .modal-body > form > .form-cells')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(12) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(12) > .form-text')
  
  // await page.waitForSelector('.modal-body > form > .form-cells > .form-cell:nth-child(15) > .form-text')
  // await page.click('.modal-body > form > .form-cells > .form-cell:nth-child(15) > .form-text')
  
  // await page.waitForSelector('.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
  // await page.click('.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
  
  // await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > form > div:nth-child(1)')
  // await page.click('.modal-dialog > .modal-content > .modal-body > form > div:nth-child(1)')
  
  // await page.waitForSelector('.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
  // await page.click('.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
  
  // await page.waitForSelector('.summary-content > ul > li > .form-checkbox > .form-checkbox-title')
  // await page.click('.summary-content > ul > li > .form-checkbox > .form-checkbox-title')
  
  // await page.waitForSelector('.item-cells-wrap > .item-cell:nth-child(1) > .checkout-step > .checkout-step-action > .btn')
  // await page.click('.item-cells-wrap > .item-cell:nth-child(1) > .checkout-step > .checkout-step-action > .btn')
  
  // await page.waitForSelector('.item-cells-wrap > .item-cell:nth-child(2) > .checkout-step > .checkout-step-action > .btn')
  // await page.click('.item-cells-wrap > .item-cell:nth-child(2) > .checkout-step > .checkout-step-action > .btn')
  
  // await page.waitForSelector('.checkout-tabs-wrap:nth-child(2) > .checkout-tab-content > .item-cells-wrap > .item-cell > .card')
  // await page.click('.checkout-tabs-wrap:nth-child(2) > .checkout-tab-content > .item-cells-wrap > .item-cell > .card')
  
  // await frame_9440.waitForSelector('.modal-content > .modal-body > .form-cells > .form-cell:nth-child(1) > .form-text')
  // await frame_9440.click('.modal-content > .modal-body > .form-cells > .form-cell:nth-child(1) > .form-text')
  
  // await frame_9440.waitForSelector('.modal-content > .modal-body > .form-cells > .form-cell > .mask-cardnumber')
  // await frame_9440.click('.modal-content > .modal-body > .form-cells > .form-cell > .mask-cardnumber')
  
  // setTimeout(async () => { await browser.close() }, 60000)
  // await browser.close()
}
export { purchase }