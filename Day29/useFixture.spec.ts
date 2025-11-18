//import test from "@playwright/test"
import {test} from "./customFixture"

test(`Using custom fixture`,async ({page}) => {
    
    console.log(await page.title());
    
})