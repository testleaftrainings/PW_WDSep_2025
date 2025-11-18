"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HDFC = /** @class */ (function () {
    function HDFC() {
    }
    HDFC.prototype.interestRate = function (interestRate) {
        console.log(interestRate);
    };
    HDFC.prototype.audit = function (kyc) {
        console.log("KYC Mandatory", kyc);
    };
    return HDFC;
}());
var ob = new HDFC();
ob.interestRate(7.5);
ob.audit("DOB");
