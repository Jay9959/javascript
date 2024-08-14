
// salery

function salery(value) {

    let da = (value * 10) / 100;
    let hra = (value * 8) / 100;
    let ta = (value * 5) / 100;

    let tax = da+hra+ta;

    return value-tax;
}
console.log(salery(1000));

// Fahrenheit to Celsius

function temp(Fahrenheit){
    return (Fahrenheit-32)*5/9;
}
console.log(temp(100))

// Celsius to Fahrenheit

function temp(Celsius) {
    return (Celsius * 9 / 5) + 32;
}
console.log(temp(37.78))

// dollare to rupee 

function coin(dollare){
    return dollare*83;
}
console.log(coin(100))

// rupee to dollare/

function coin(rupee){
    return rupee/83;
}
console.log(coin(83))


let a = 10;
let b = 30;

// let c = a**b;

b=a+b;
a=b-a;
b=b-a;

console.log( "a = ",a)
console.log( "b = ",b)