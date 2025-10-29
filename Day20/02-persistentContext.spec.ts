import { chromium, test } from "@playwright/test";


test(`Test to launch the browser using persistent context`, async () => {

    const userDataDir = "./myUserDataDir"

    const context = await chromium.launchPersistentContext(userDataDir, {
                       headless: false,
                       permissions: ['notifications'],
                       httpCredentials: {
                       username: "admin",
                       password: "testleaf"
        }
    })

    const page = await context.newPage()
    await page.goto(`https://leafground.com/auth.xhtml`)
    await page.locator(`//span[text()="Basic Auth"]`).click()
    await page.waitForTimeout(3000)

})


//https://leafground.com/auth.xhtml