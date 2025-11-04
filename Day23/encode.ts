import {faker} from "@faker-js/faker"

let username ="admin"
let password="4mm-9aAXKwQ-"

let auth = btoa(`${username}:${password}`)
console.log(auth);

/* let fname = faker.person.firstName()
let cname = faker.company.buzzNoun() */

/* console.log(fname);
console.log(cname); */


