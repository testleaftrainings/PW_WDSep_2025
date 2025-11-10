import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickets";


test(`Test to record tracing of a specific bug`,async ({page}) => {
    
    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // -> Username

    await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesforce#1234") // -> Username

   await page.getByRole("button",{name:"button1"}).click()



    await page.waitForTimeout(3000)
})

test.afterEach(`Fetch the test status of test`,async ({},testinfo) => {

  /*   console.log(testinfo.status);// status of test execution of Lead and account module
    console.log(testinfo.title);  */

    await logADefectInJira(testinfo)


    
})

