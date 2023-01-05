"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: "John", id: 1, email: "samplemail" };
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
    getNameWithAddress2() {
        return `${this.name} stays at ${this.address}`;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
class Menager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress2() {
        return `${this.name} is a menager at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Highway 71");
let mike = new Menager(2, "Mike", "Sunny 23");
console.log(john);
console.log(john.getNameWithAddress());
console.log(john.getNameWithAddress2());
console.log(mike.getNameWithAddress2());
john.empId = 100;
console.log(john.empId);
//# sourceMappingURL=class.js.map