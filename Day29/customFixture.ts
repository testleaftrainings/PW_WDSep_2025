import {test as baseT} from "@playwright/test"

export const test = baseT.extend({ // here test == baseT

page : async({page},use)=>{
    //const page = await browser.newPage()
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`.inputLogin`).first().fill(`democsr`);

   //await page.locator(`.inputLogin`).nth(0).fill(`democsr`);

   await page.locator(`#password`).fill(`crmsfa`);

   await page.locator(`.decorativeSubmit`).click();

   await page.waitForTimeout(3000)

   await use(page)//Line that seperates the start and end of the fixture

   await page.close()
}

})