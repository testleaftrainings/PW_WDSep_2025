"use strict";
//Abstract class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper() {
    }
    //0 to 100% implemnetation
    //cannot create an object 
    ElementWrapper.prototype.typeAndTab = function (firstName) {
        console.log("Type in the data and press tab ".concat(firstName, " "));
    };
    return ElementWrapper;
}());
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.takeScreenshot = function () {
        console.log("screenshot this method comes from abstract class");
    };
    Login.prototype.interestRate = function (interestRate) {
        console.log("Interest rate is ".concat(interestRate, " comes from interface.ts file"));
    };
    return Login;
}(ElementWrapper));
var login = new Login();
login.takeScreenshot();
login.typeAndTab("Ravi");
login.interestRate(6.5);
