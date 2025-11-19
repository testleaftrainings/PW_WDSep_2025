var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //Single implementation for both the method signatures
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) {
            console.log("Forcibly clicking the element ".concat(element));
        }
        else {
            console.log("Clicking the element ".concat(element));
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
//actions.click("#Login")
actions.click("#Login", true);
