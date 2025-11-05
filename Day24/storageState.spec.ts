import { test } from "@playwright/test";


test(`Login Functionality`,async ({page}) => {
    
      await page.goto(`https://login.salesforce.com/?locale=in`)

    /* First set of data */
    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`) // fill(credentials[0].Username) 

    await page.locator("#password").fill(`RaviSalesforce#1234`) //fill(credentials[0].Password)
    
    await page.locator("#Login").click()

    await page.getByTitle("App Launcher",{exact:true}).click() // Welcome page 

    await page.context().storageState({path:"Data/login_SF.json"})//Capture the session storage details
})
