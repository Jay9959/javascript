// Arithmetic Operators  :- + , - , * , / , %
let a = 10;
let b = 5;
let c = 15;

console.log("Arithmetic Operators")
console.log("a + b :- ", a + b)
console.log("a - b :- ", a - b)
console.log("a * b :- ", a * b)
console.log("a / b :- ", a / b)
console.log("a % b :- ", a % b)

console.log("Assignment Operators")
console.log("a = b :- ", a = b)

console.log("Assignment Operators")
let userName = "arpit"
console.log(userName)

console.log("Comparison operators")
console.log("a > b :- ", a > b)
console.log("a < b :- ", a < b)
console.log("a <= b :- ", a <= b)
console.log("a >= b :- ", a >= b)
console.log("a == b :- ", a == b)

console.log("Logical operators")
if (a < b && a < c) {
    console.log("&&  :-  condition is true")
}
else{
    console.log("&&  :-  condition is false")
}
if (a < b || a < c) {
    console.log("||  :-  condition is true")
}
else{
    console.log("||  :-  condition is false")
}


var t1 =20;
var t2 = "20";

if(t1 === t2){
    console.log("yes value is same")
}
else{
    console.log("no value is not same")
}


// string to Number

let a1 = 10;
let a2 = a1.toString()
console.log(typeof(a2))

let b1 = "20";
let b2 = Number(b1);
console.log(typeof(b2))