
import { expect, test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto(`http://leaftaps.com/opentaps/control/main`);

   const pageTitle = await page.title()

   console.log(`The title of the page is ${pageTitle}`);

  // await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform")

 //  await expect(page).toHaveTitle("Playwright")// The test execution will abruptly stop in this line.
 await expect.soft(page).toHaveTitle("Playwright")// The execution proceeds to the next line of code even though the assertion fails.
   
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


    const dropdownList = page.locator(`#createLeadForm_dataSourceId>option`) // this locator has 13 values
        
    const dropdownCount = await dropdownList.count() // 13

    console.log(dropdownCount); // 13

    for (let index = 0; index < dropdownCount ; index++) {
      
      console.log(await dropdownList.nth(index).innerText()) //Cold Call
      

      /* dropdownList.nth(0) // 
      dropdownList.nth(1) //(#createLeadForm_dataSourceId>option).nth(1) => Cold Call
       dropdownList.nth(2) //(#createLeadForm_dataSourceId>option).nth(2) => Conference*/
                   
 
    }

    await page.locator(`//input[@class="smallSubmit"]`).click();

    const statusLocator = page.locator(`#viewLead_statusId_sp`); // locator valur for "Assigned"

    //Locator Assertion ->  Verifying from the locator perspective

    await expect(statusLocator).toBeVisible();

    //Genric Assertions --> Verifying from the value perspective

    const statusText = await statusLocator.innerText()

    console.log(`Ther status is ${statusText}`);

    await expect(statusLocator).toContainText("Assigned") // Assertion by value

    await page.waitForTimeout(3000)
    
   })