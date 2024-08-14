let age = 23;
let lic = 2;

if (age >= 25) {
    if (lic >= 5) {
        console.log("Eligible for rental")
    } else {
        console.log("Not eligible due to driving experience")
    }
} else if (age >= 21 && age < 25) {
    if (lic >= 3) {
        console.log("Eligible for rental with young driver fee")
    } else {
        console.log("Not eligible due to driving experience")
    }
} else {
    console.log("Not eligible due to age")
}