import { devices, test } from "@playwright/test";

test.use({
    ...devices[`Galaxy Note 3`]
})
test(`Emulate the devices`,async ({page}) => {
    
    await page.goto(`https://www.flipkart.com/`)
    await page.waitForTimeout(3000)
})