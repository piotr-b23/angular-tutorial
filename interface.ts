export interface User{
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = {name: "John", id: 1, email: "samplemail"};

let {name: userName, email:userLogin}: User = {name: "John", id: 1, email: "samplemail"};



interface Employees extends User {
    salary: number;

}

let employee: Employees = {name: "Mike", id:1, email: "", salary:3000};

export interface Login{
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [{name: "John",id: 1,email: ""},
    {name: "Mike",id: 2,email: ""},
    {name: "Tommy",id: 3,email: ""},
    {name: "Peter",id: 4,email: ""},
    {name: "Jacob",id: 5,email: ""}]

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id === 3);

console.log(result);

//@Component({})
//class Component {
//    constructor(public name: string){};
//}
