/* //Numeric enum is default enum

enum TestResults {
Pass,
Fail,
Skip
}

function logTestResult(testName:string , result:TestResults){

console.log(`Test ${testName}`,`Result Code : ${result}`);

}

logTestResult("LoginPage",TestResults.Pass) */
//String enum 
// enum BrowserType {
// Chrome ="chrome",
// Firefox="firefox",
// Edge="edge"
// }
// function launchBrowser(browserEngine:BrowserType){
// console.log(`Launch browser using ${browserEngine}`);
// }
// launchBrowser(BrowserType.Firefox)
//Heterogenous enum 
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 1] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 2] = "Incognito";
    BrowserStatus["Crash"] = "Crashed";
    BrowserStatus[BrowserStatus["Close"] = 3] = "Close";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus(BrowserStatus.Crash); // Crashed
reportBrowserStatus(BrowserStatus.Close);
