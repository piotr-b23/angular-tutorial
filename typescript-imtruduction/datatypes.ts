let fname : string;

fname = "John";

let newname = fname.toUpperCase();


let age: number;

age = 25;
age = 25.5;

let dob ="25";
let result = parseInt(dob);

let isValid : boolean = false;



let empList : string[];

empList = ["test", "test"];

let depList : Array<number>;

depList = [12,13,15,16,18];

let resultArray = depList.filter((x)=> x>13);

let sum = depList.reduce((acc, num) => acc + num);


const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;


let swapNumbs: [fisrtNumber : number, secondNumber: number];

function swapNumbers(num1 : number, num2 : number) : [number,number]{

    return[num2,num1];
}


swapNumbs = swapNumbers(10,20);



let departament : any;

departament = "IT";
departament = 10;
