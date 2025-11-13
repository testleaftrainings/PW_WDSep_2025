import { test } from "@playwright/test";
import { ViewLeadPage } from "../pages/06-viewLeadPage";

test(`Create Lead Verification`,async ({page}) => {

     const vp = new ViewLeadPage(page)
    await vp.loadurl(`http://leaftaps.com/opentaps/control/main`)
    await vp.enterCredentials("demoCSR","crmsfa")
    await vp.clickLogin()
    await vp.clickCRM()
    await vp.clickLead()
    await vp.clickCreateLead()
    await vp.enterMandatoryDetails()
    await vp.clickSubmit()
    await vp.verifyFirstName()    
})


