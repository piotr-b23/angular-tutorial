function add(a: number, b: number, num3?: number): number {
    return num3 ? a + b + num3 : a + b;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub(2, 3));
console.log(sub(2, 3, 1));

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};


function add2(num1: number, num2: number, ...num3 : number[]) : number {
return num1 + num2 + num3.reduce((a,b)=> a + b, 2);
}

let numbers = [1,2,3];
console.log(add2(2,3));

function getItems<placeHolder>(items: placeHolder[]): placeHolder[]{
    return new Array<placeHolder>().concat(items);
}

let concatResult = getItems([1,2,3,4,5]);