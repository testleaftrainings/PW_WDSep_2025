
import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username="ravindranr90@gmail.com"
const apiKey="ATATT3xFfGF064-tRzvS9X1FBqKR6aoiufeVpMvx1aSNnInLBX0sfkRg7xO4lROIHbTf3f1l_Y26Q13VQWi59o_rl3GTTzmoLbrVVO2r1_lgdDqXFmweJ46vWlmYesJyiwc58xzevx9jQTbNOY8ZOW0JGL08E-OjCJJ1-kNM_Xq78lcXA1UHiow=EF61F231"
const projectId="SP"

export async function createJiraIssue(summary:string,description:string){

const issueRequestJson={
    "fields":{
        "project":{
            "key":projectId
        },
        "summary":summary,
        "description":description,
        "issuetype":{
            "name":"Bug"
        }
    }
}

await axios.post(endpoint,issueRequestJson,
    {
        auth:{
            username:username,
            password:apiKey
        },
        headers:{
            'Content-Type':'application/json'
        }
    }
)
}




