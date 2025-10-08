
import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto(`http://leaftaps.com/opentaps/control/main`);

   await page.locator(`//input[@id="username"]`).first().fill(`democsr`);

   await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

   await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.locator(`//a[text()="Create Lead"]`).click();

    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Testleaf")

    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Ravindran")

    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");

    // await page.selectOption(`//select[@id='createLeadForm_dataSourceId']`,{label:"Direct Mail"}) // label when the label value will not change by any way

    // await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"})//value --> 1st priority 

    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3}) //index we will use when your sure the order is not going to change

    await page.waitForTimeout(3000)

   })