let kg = 90;
let height = 1.6;

let bmi = kg / (height * height)

if (bmi < 18.5) {
    if (bmi < 16) {
        console.log("Severely underweight")
    }
    else {
        console.log("Underweight")
    }
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight")
} else if (bmi >= 25 && bmi < 29.9) {
    if (bmi > 27.5) {
        console.log("Moderately overweight")
    }
    else {
        console.log("Overweight")
    }
} else if (bmi >= 30) {
    if (bmi >= 35) {
        console.log("Severely obese")
    }
    else {
        console.log("Obese")
    }
}