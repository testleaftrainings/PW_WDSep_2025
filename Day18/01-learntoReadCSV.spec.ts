import test  from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"

test.describe.serial(`Login tests in serial mode`,async () => {
    
let records : any[] = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})

for(let data of records){

test(`Login test using CSV ${data.tcid}`,async ({page}) => {
    
     await page.goto(`http://leaftaps.com/opentaps/control/main`)

    /* First set of data */
    await page.locator("#username").fill(data.username) // fill(credentials[0].Username) 

    await page.locator("#password").fill(data.password) //fill(credentials[0].Password) 
})
}
})

//Before conversion :

// tcid,username,password
// 1,demoSalesManager,crmsfa
// 2,demoCSR,crmsfa

//After conversion :

/* [
{
tcid:1,
username:demoSalesManager,
password:crmsfa
},{
tcid:2,
username:demoCSR,
password:crmsfa
}

] */


