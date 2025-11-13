import {selectors} from "./locators"
import {HomePage } from "./03-homePage"

export class LeadPage extends HomePage {

    async clickCreateLead(){
        await this.page.click(selectors.createLeadBtn)
    }

}