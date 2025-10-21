import { test } from "@playwright/test";

test(`Handling tabs in sequential way of handling windows`,async ({page,context}) => {
    

    await page.goto(`https://www.flipkart.com/`);

    await page.locator(`//input[@placeholder="Search for Products, Brands and More"]`).fill("Phones");

    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`)

    await searchBox.press("Enter") // Keyboard action to press ENTER button

    await page.waitForTimeout(3000)

    // const newPage =  context.waitForEvent(`page`) // Event listener ready to capture the new page when it is clicked

    // await page.locator(`//div[contains(text(),"MOTOROLA g")]`).click()

    // const childPage = await newPage

    // console.log(await page.title()); //List of mobile phone page

    // console.log(await childPage.title());

    // const price = await childPage.locator(`//div[contains(@class,"bqj CxhGGd")]`).innerText()

    //console.log(price);

    //Concurrent way of window handling

    const [childPage] =await Promise.all([context.waitForEvent(`page`), page.locator(`//div[contains(text(),"MOTOROLA g")]`).click()])
        
    console.log(await childPage.title())

    console.log(await page.title());

})


test.only(`Handling Muliple pages using concurrent method`,async ({page,context}) => {
    
    await page.goto(`https://leafground.com/window.xhtml`);

    await Promise.all([context.waitForEvent('page'),page.getByText('Open Multiple',{exact:true}).click()])

    await page.waitForLoadState("domcontentloaded")

     const allPages = context.pages()

    console.log(allPages.length);

    console.log(await allPages[0].title());//allPages[0]-->means page --> parent page 
    console.log(await allPages[1].title());//allPages[1]--> firstchild page
    console.log(await allPages[2].title());//allPages[2]-->secongchild page    
    
    
})