let weather = "sunny";
let temp = 50 

if (weather == "sunny") {
    if (temp > 30) {
        console.log("Go to the beach")
    }
    else {
        console.log("Go for a walk")
    }
} else if (weather == "rainy") {
    if (temp > 20) {
        console.log("Read a book indoors")
    }
    else {
        console.log("Watch a movie")
    }
} else if (weather == "snowy") {
    if (temp <= 0) {
        console.log("Build a snowman")
    }
    else {
        console.log("Go skiing")
    }
} else {
    console.log("plase enter an corrat input")
}