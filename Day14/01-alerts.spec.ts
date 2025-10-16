// import { test } from "@playwright/test";

// test(`Test to handle alerts`,async ({page}) => {
    
//     await page.goto(`https://leafground.com/alert.xhtml`);

//     await page.locator(`(//span[text()="Show"])[1]`).click(); // CLick the simple alert
    
//     await page.waitForTimeout(3000)

//     await page.locator(`(//span[text()="Show"])[2]`).click(); // CLick the confirm alert
    
//     await page.waitForTimeout(3000)

//     await page.locator(`(//span[text()="Show"])[5]`).click(); // CLick the prompt alert
    
//     await page.waitForTimeout(3000)


// })


import { test } from "@playwright/test";

test(`Test to handle alerts`,async ({page}) => {
    await page.goto(`https://leafground.com/alert.xhtml`);
    
    page.on('dialog',async(alert)=>{

        const alertMessage = alert.message()
        console.log(`The message inside the alerts says ${alertMessage}`); //Did you call me?

        const alertType = alert.type()
        console.log(`The alert type is ${alertType}`); //Confirm Alert 

        if(alertType==='confirm'){
            await alert.accept()
        }else
            await alert.dismiss()       
      
    })

      
    await page.locator(`(//span[text()="Show"])[1]`).click(); // CLick the simple alert --> only one button so you can write accept() or dismiss()
    
    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[2]`).click(); // CLick the confirm alert
    
    await page.waitForTimeout(3000)

    // await page.locator(`(//span[text()="Show"])[5]`).click(); // CLick the prompt alert
    
    // await page.waitForTimeout(3000)

})