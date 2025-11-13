import { selectors } from "./locators";
import { LoginPage } from "./01-loginPage";



export class WelcomePage extends LoginPage{

    async clickCRM(){
        await this.page.locator(selectors.crmLink).click()
    }
    
    async clickLogout(){
       await this.page.locator(selectors.login_logout).click() 
    }
}