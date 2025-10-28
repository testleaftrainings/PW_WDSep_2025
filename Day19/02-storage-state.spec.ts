import { test } from "@playwright/test";


test(`Login Functionality`,async ({page}) => {
    
      await page.goto(`http://leaftaps.com/opentaps/control/main`)

    /* First set of data */
    await page.locator("#username").fill(`democsr`) // fill(credentials[0].Username) 

    await page.locator("#password").fill(`crmsfa`) //fill(credentials[0].Password)
    
    await page.locator(".decorativeSubmit").click()

    await page.locator(`text=CRM/SFA`).click() // Welcome page 

    await page.context().storageState({path:"Data/login_LTY.json"})//Capture the session storage details
})


