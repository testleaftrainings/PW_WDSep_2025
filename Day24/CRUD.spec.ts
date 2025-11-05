import { test } from "@playwright/test";
import { createResource, fetchResource} from "./apiUtility"

test(`UI Verification`,async ({page,request}) => {

    await createResource(request)

    let lname = await fetchResource(request)
    
    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // -> Username

    await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesforce#1234") // -> Username

    await page.getByRole("button",{name:"Log In"}).click()

    await page.waitForTimeout(3000)

    await page.getByTitle(`App Launcher`,{exact:true}).click()

    await page.getByText(`View All`,{exact:true}).click()

    await page.getByPlaceholder(`Search apps or items...`,{exact:true}).fill("Leads")

    await page.getByText(`Leads`,{exact:true}).click()

    await page.getByPlaceholder(`Search this list...`).fill(lname)

    await page.getByPlaceholder(`Search this list...`).press("Enter")

    await page.waitForTimeout(3000)

})