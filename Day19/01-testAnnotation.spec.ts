import test  from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"
import { loadavg } from "os";

let records : any[] //Global declaration so that it is accesible through out the all test blocks

test.use({storageState:`Data/login_LTY.json`})

test.describe.serial(`Login tests in serial mode`,async () => {

test.beforeAll(`Read data from csv (Data connectivity)`,async () => {

    console.log(`BeforeALl executing ones`);
    
    records = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})

})    

test.beforeEach(`Login Functionality`,async ({page}) => {
    
    console.log(`BeforeEach executing twice for lead module and account modules`);

     await page.goto(`http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL191233150497`)

    // /* First set of data */
    // await page.locator("#username").fill(records[0].username) // fill(credentials[0].Username) 

    // await page.locator("#password").fill(records[0].password) //fill(credentials[0].Password)
    
    // await page.locator(".decorativeSubmit").click()

    // await page.locator(`text=CRM/SFA`).click()
})

test(`Lead Module`,async ({page}) => {
    
    console.log(`Executing the lead module`); 
 //  await page.locator(`text=CRM/SFA`).click()
    await page.locator(`//a[text()="Create Lead"]`).click() // Navigating to Create Lead page
})

test(`Account Module`,async ({page}) => {

     console.log(`Executing the account module`);
  //   await page.locator(`text=CRM/SFA`).click()    
    await page.locator(`//a[text()="Create Account"]`).click()// Navigating to Create Account page
})

test.afterEach(`Fetch the test status of each test`,async ({},testinfo) => {

    console.log(`Executing  twice after each test execution`);

    console.log(testinfo.status);// status of test execution of Lead and account module
    console.log(testinfo.title); 
    
})

test.afterAll(`Upload all the attchment`,async () => {
    console.log(`Running after all the test`);
    console.log(`The report and screenshot are uploaded in test managment tool`);
    
    
})

})