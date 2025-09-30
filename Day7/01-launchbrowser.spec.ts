
import { chromium,firefox,test } from "@playwright/test";

test("Test to launch a browser manually", async() => { 
    
   const browser = await chromium.launch(); // Step1 --> Open browser
   const context = await browser.newContext(); // Step2 --> Create an incoginto/isolated window named context
   const page    = await context.newPage(); //step3--> Create a page in thw isolated window

   await page.goto(`https://www.amazon.in/`)


   /* firefox.launch()
   webkit.launch() */

})

test("Test to launch a browser using page fixture", async({page}) => { 
    
  /*  const browser = await chromium.launch(); // Step1 --> Open browser
   const context = await browser.newContext(); // Step2 --> Create an incoginto/isolated window named context
   const page    = await context.newPage(); //step3--> Create a page in thw isolated window */

   await page.goto(`https://www.amazon.in/`)


   /* firefox.launch()
   webkit.launch() */

})






/* browser

browsercontext

page


loadurl

interact with webelements */