import {CreateLeadPage} from "./05-createLeadPage"

export class ViewLeadPage extends CreateLeadPage{

    async verifyFirstName(){
        const fName =await this.page.innerText("#viewLead_firstName_sp")
        console.log(fName);
    //    await this.page.waitForTimeout(3000)
        

    }
}