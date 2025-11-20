// import {chromium,test} from '@playwright/test';

// test('GeoLocation Test', async ()=> {

//     const browser = await chromium.launch({headless:false})
//     const context = await browser.newContext({
//         geolocation:{
//             latitude:32.824633,
//             longitude:-117.4374193
//         },
//         permissions:['geolocation']
//     })
//     const page = await context.newPage()

//     await page.goto("https://www.pubnub.com/demos/geolocation-demo/?show=demo")

//     await page.waitForLoadState(`domcontentloaded`)

//     await page.waitForTimeout(12000)

//     await browser.close()


// })

import { test } from "@playwright/test";

test.use({
    geolocation:{
        latitude:41.8332392,
        longitude:88.0615686
    },
    permissions:[`geolocation`,'notifications']
})


test(`GeoLocation`,async ({page}) => {
    await page.goto("https://www.google.co.in/maps/");
    await page.click("#sVuEFc")
    await page.waitForTimeout(12000)
})