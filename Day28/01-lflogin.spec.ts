import { test } from "@playwright/test";
import { LoginPage } from "./02-loginPage";

test(`Login Verification`,async ({page}) => {

     const login = new LoginPage(page)
    await login.loadurl(`http://leaftaps.com/opentaps/control/main`)
    await login.enterCredentials("demoCSR","crmsfa")
    await login.clickLogin()
    
})


