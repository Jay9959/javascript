function grade(mark) {
    if (mark >= 90) {
        console.log("grade is A+")
    }
    else if (mark >= 80 && mark <= 89) {
        console.log("grade is A")
    }
    else if (mark >= 70 && mark <= 79) {
        console.log("grade is B")
    }
    else if (mark >= 60 && mark <= 69) {
        console.log("grade is C")
    }
    else if (mark >= 50 && mark <= 59) {
        console.log("grade is D")
    }
    else {
        console.log("fail")
    }
}
grade(85);


function avg(a, b, c, d, e, f) {
    return (a + b + c + d + e + f) / 6;
}
console.log(avg(15, 20, 19, 16, 25, 46))