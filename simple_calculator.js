let num1 = 8;
let num2 = 8;

function simple(calculator) {
    if (calculator == "+") {
        console.log("num1 + num2=", num1 + num2)
    }
    else if (calculator == "-") {
        console.log("num1 - num2=", num1 - num2)
    }
    else if (calculator == "*") {
        console.log("num1 * num2=", num1 * num2)
    }
    else if (calculator == "/") {
        console.log("num1 / num2=", num1 / num2)
    }
    else {
        console.log("plase chack in operaator")
    }
}

simple("+")