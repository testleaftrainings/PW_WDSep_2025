import { test } from "@playwright/test";

test(`Learning playwright locators`,async ({page}) => {
    
    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // -> Username

    await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesforce#1234") // -> Username

    await page.getByRole("button",{name:"Log In"}).click()

    await page.waitForTimeout(3000)
})