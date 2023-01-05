import { Login } from './interface';
import { User } from './interface';

class Employee implements Login{
#id : number;
protected name : string;
address: string;

static getEmployeeCount(): number {
    return 50;
}

constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;

}
    Login(): User {
        return {name: "John", id: 1, email: "samplemail"};
    }

getNameWithAddress() : string{
return this.name + " " + this.address;
}

getNameWithAddress2() : string{
    return `${this.name} stays at ${this.address}`;
    }

get empId(): number{
    return this.#id;
}

set empId(id: number){
    this.#id = id;
}

}

class Menager extends Employee{
    constructor(id: number, name: string, address: string) {
        super(id, name,address);
    }

    getNameWithAddress2(): string {
        return `${this.name} is a menager at ${this.address}`;
    }
}

let john = new Employee(1,"John","Highway 71");

let mike = new Menager(2,"Mike","Sunny 23");

john.empId = 100;

