import { expect, test } from "@playwright/test";

test(`Test to assert the text box`,async ({page}) => {
    
    await page.goto(`https://leafground.com/input.xhtml`);

   const disabled = page.locator(`//input[@placeholder="Disabled"]`) // loccator of the button that is diabled

 await expect(disabled).toBeDisabled();

})