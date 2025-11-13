import { selectors } from "./locators"
import {WelcomePage} from "./02-welcomePage"

export class HomePage extends WelcomePage{

    async clickLead(){
     //   await this.page.locator(`//a[text()="Leads"]`).click()

        await this.page.click(selectors.LeadMod)
    }
    
    async clickAccount(){
        await this.page.click(`//a[text()="Accounts"]`)
    }

     async clickContacts(){
        await this.page.click(`//a[text()="Contacts"]`)
    }

    async clickOpportunities(){
        await this.page.click(`//a[text()="Opportunities"]`)
    }

}