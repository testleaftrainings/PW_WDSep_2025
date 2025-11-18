export interface reserveBank{
interestRate(interestRate:number):void
//method signature -->unimplemented method
}

export interface govtRules{
    audit(kyc:string):void
}

class HDFC implements reserveBank,govtRules { // HDFC is concrete --> implemented methods 
interestRate(interestRate: number): void {
    console.log(interestRate);   
    
}

audit(kyc:string){
    console.log("KYC Mandatory",kyc) 
}
}

const ob = new HDFC()
ob.interestRate(7.5)
ob.audit("DOB")

