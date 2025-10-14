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

enum BrowserStatus {
Open=1,
Incognito,
Crash="Crashed",
Close=3
}

function reportBrowserStatus(status:BrowserStatus){
console.log(`Current status of browser is ${status}`);
}

reportBrowserStatus(BrowserStatus.Crash) // Crashed
reportBrowserStatus(BrowserStatus.Close) //3