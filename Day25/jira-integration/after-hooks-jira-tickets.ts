import { TestInfo } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";


export async function logADefectInJira(testinfo:TestInfo){

if(testinfo.status==="failed" || testinfo.status==="timedOut"){

const summary = `Test ${testinfo.status} : ${testinfo.title}`
const description = `Here is the error ${testinfo?.error}`

await createJiraIssue(summary,description)

console.log(`Jira issue created for ${testinfo.status} : ${testinfo.title} `);
console.log(`Error message :${testinfo?.error} `);

}
else{
    
}
}


