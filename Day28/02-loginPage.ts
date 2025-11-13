
import { chromium, Page } from "@playwright/test";

export class LoginPage {

    page : Page  // Setting page reference globally using type Page so that we can use the page refernce inside the methods

    constructor(Tpage : Page) { // 1 st method that gets invoked is the default constructor so that we can pass the page instance to the class method where you are using playwright methods like goto, fill...
           this.page=Tpage   //Here lppage =Tpage= page instance that got passed as an argument while creation of an object
    }

    async loadurl(url:string) {
        await this.page.goto(url)
    }

    async enterCredentials(username:string, password:string) {
        await this.page.locator("#username").fill(username)
        await this.page.locator("#password").fill(password)
    }

    async clickLogin() {
        await this.page.locator(".decorativeSubmit").click()
    }

     async closeBrowser() {
        await this.page.close()
    }

    /* async verifyTitle() {
        await 
    } */
}

// async function doLogin() {

//     const browser = await chromium.launch({ headless: false }); // Step1 --> Open browser
//     const context = await browser.newContext(); // Step2 --> Create an incoginto/isolated window named context
//     const page = await context.newPage(); //step3--> Create a page in thw isolated window */

//     const login = new LoginPage(page)
//     await login.loadurl(`http://leaftaps.com/opentaps/control/main`)
//     await login.enterCredentials("demoCSR","crmsfa")
//     await login.clickLogin()
//     await login.closeBrowser()
//   // login.verifyTitle()

// }

// doLogin()







