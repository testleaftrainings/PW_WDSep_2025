import { chromium, test } from "@playwright/test";

test(`Test to execute multiple context`,async ({}) => {

     
   const browser = await chromium.launch({headless:false}); // Step1 --> Open browser
   
   const context1 = await browser.newContext(); //First Context where all the cookies and session storage is specific to this context
   const page1   = await context1.newPage(); //

   await page1.goto(`https://www.amazon.in/`)

   const context2 = await browser.newContext(); // First Context where all the cookies and session storage is specific to this context
   const page2    = await context2.newPage(); //step3--> Create a page in thw isolated window

   await page2.goto(`https://www.flipkart.com/`)

    await page2.locator(`//input[@placeholder="Search for Products, Brands and More"]`).fill("Phones");

    const searchBox = page2.locator(`//input[@placeholder="Search for Products, Brands and More"]`)

    await searchBox.press("Enter") // Keyboard action to press ENTER button

    await page2.waitForTimeout(3000)

    const newPage =  context2.waitForEvent(`page`) // Event listener ready to capture the new page when it is clicked

    await page2.locator(`//div[contains(text(),"MOTOROLA g")]`).click()

    const childPage = await newPage

    console.log(await page2.title()); //List of mobile phone page

  
   /* firefox.launch()
   webkit.launch() */

})
