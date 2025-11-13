import { LeadPage } from "./04-leadPage";

export class CreateLeadPage extends LeadPage{

    async enterMandatoryDetails(){
        await this.page.fill(`#createLeadForm_companyName`,"Testleaf")
        await this.page.fill(`#createLeadForm_firstName`,"Ravindran")
        await this.page.fill(`#createLeadForm_lastName`,"R")
    }

    async clickSubmit(){
        await this.page.click(`.smallSubmit`)
    }
    

}