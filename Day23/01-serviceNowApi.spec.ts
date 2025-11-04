//POSTMAN API testing in SERVICE NOW :

//endpoint.
//Authorization
//Headers
//Request Body
//CRUD operation -> POST,GET,PATCH..

import { expect, test } from "@playwright/test";

let id : any // Global variable declaration , explicit inference with any datatype

test.describe.serial(`Service Now`,async () => {
    
test(`Creating Incident using Playwright with API`, async ({ request }) => {

    const response = await request.post(`https://dev224307.service-now.com/api/now/table/incident`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46NG1tLTlhQVhLd1Et",
                "Content-Type": "application/json"

            },
            data: {

                "short_description": "Application Issue Created using PLAYWRIGHT API CALL - Ravi"

            }
        }
    )

    const responseBody =await response.json()
    console.log(responseBody);

    console.log(response.status());
    //Assert status code
    expect(response.status()).toBe(201)

    console.log(response.statusText());
     //Assert status text
    expect(response.statusText()).toBe("Created")
    
    id = responseBody.result.sys_id
    console.log(id);
    

})


test(`Fetch the created incident using playwright with API`,async ({request}) => {

    const response = await request.get(`https://dev224307.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                 "Authorization": "Basic YWRtaW46NG1tLTlhQVhLd1Et",
                "Content-Type": "application/json"
            }
        }
    )
    
    const res = await response.json()
    console.log(res);

    console.log(response.status());

    console.log(response.statusText());   
    
})

})