let maths = 95;
let sci = 93;
let eng = 9;

if (maths >= 70 && sci >= 65 && eng >= 60) {
    console.log("Eligible for admission")
} else {
    if (maths < 70) {
        console.log("Not eligible due to Math score")
    } else if (sci < 65) {
        console.log("Not eligible due to Science score")
    } else if (eng < 60) {
        console.log("Not eligible due to English score")
    }
}