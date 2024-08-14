let side1 = 89;
let side2 = 87;
let side3 = 85;

if (side1 == side2 && side1 == side3) {
    console.log("Equilateral")
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("Isosceles")
} else {
    console.log("Scalene")
}