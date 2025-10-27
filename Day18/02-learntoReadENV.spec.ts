import { test } from "@playwright/test";
import dotenv from "dotenv"

dotenv.config({path:`Data/qa.env`})

test(`Learn to read data from .env file`,async ({page}) => {
    
    // console.log(process.env.BaseUrl);
    // console.log(process.env.LF_Username);
    // console.log(process.env.LF_Password);
 
     await page.goto(process.env.BaseUrl as string)// TypeAssertion tells the "typescript compiler" that the data fetched fro0m qa.env is set as string datatype

    /* First set of data */
    await page.locator("#username").fill(process.env.LF_Username1 as string) 

    await page.locator("#password").fill(process.env.LF_Password1 as string) 

    
})


//console.log(process.env); // System environment configuration will be taken
