import { test } from "@playwright/test";

/* test.skip(`Test Annotation with skip cause test not suitable for QA environment`,async ({page}) => {
    
      await page.goto(`http://leaftaps.com/opentaps/control/main`);
    
      await page.locator(`//input[@id="username"]`).first().fill(`democsr`);
    
       await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    
       await page.locator(`//input[@class="decorativeSubmit"]`).click();
    
        await page.locator(`//a[contains(text(),"CRM")]`).click(); 
}) */

//Purpose :


// test.fixme(`Test Annotation with fixme not suitable for QA environment`,async ({page}) => {
    
//       await page.goto(`http://leaftaps.com/opentaps/control/main`);
    
//       await page.locator(`//input[@id="username"]`).first().fill(`democsr`);
    
//        await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    
//        await page.locator(`//input[@class="decorativeSubmit"]`).click();
    
//         await page.locator(`//a[contains(text(),"CRM")]`).click(); 
// })

/* Purpose :
1. Convey yo your team this code is to be fixed it will be reminder
2. Example when you have flakiness and if there is any update in the application*/


// test.fail(`Test Annotation with fail is expected to fail negative testing`,async ({page}) => {
    
//       await page.goto(`http://leaftaps.com/opentaps/control/main`);
    
//       await page.locator(`//input[@id="username"]`).first().fill(`csr`);
    
//        await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    
//        await page.locator(`//input[@class="decorativeSubmit"]`).click();
    
//         await page.locator(`//a[contains(text(),"CRM")]`).click(); 
// })


test(`Test Annotation to triple the overall timeout of test script execution`,async ({page}) => {
      
  
      test.slow(); // used to increase the timeout thrice 
      await page.goto(`http://leaftaps.com/opentaps/control/main`);
    
      await page.locator(`//input[@id="username"]`).first().fill(`democsr`);
    
       await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    
       await page.locator(`//input[@class="decorativeSubm"]`).click();
    
        await page.locator(`//a[contains(text(),"CRM")]`).click(); 
})


