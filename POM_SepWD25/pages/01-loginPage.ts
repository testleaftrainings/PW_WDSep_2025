
import { chromium, Page } from "@playwright/test";
import {selectors} from "./locators"
export class LoginPage {

    page : Page  // Setting page reference globally using type Page so that we can use the page refernce inside the methods

    constructor(Tpage : Page) { // 1 st method that gets invoked is the default constructor so that we can pass the page instance to the class method where you are using playwright methods like goto, fill...
           this.page=Tpage   //Here lppage =Tpage= page instance that got passed as an argument while creation of an object
    }

  

    async loadurl(url:string) {
        await this.page.goto(url)
    }

    async enterCredentials(username:string, password:string) {
        await this.page.locator(selectors.usernameField).fill(username)
        await this.page.locator(selectors.PwdField).fill(password)
    }

    async clickLogin() {
        await this.page.locator(selectors.login_logout).click()
    }

 
}









