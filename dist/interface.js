"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "samplemail" };
let { name: userName, email: userLogin } = { name: "John", id: 1, email: "samplemail" };
let employee = { name: "Mike", id: 1, email: "", salary: 3000 };
let [user1, user2, ...restUsers] = [{ name: "John", id: 1, email: "" },
    { name: "Mike", id: 2, email: "" },
    { name: "Tommy", id: 3, email: "" },
    { name: "Peter", id: 4, email: "" },
    { name: "Jacob", id: 5, email: "" }];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id === 3);
console.log(result);
//@Component({})
//class Component {
//    constructor(public name: string){};
//}
//# sourceMappingURL=interface.js.map