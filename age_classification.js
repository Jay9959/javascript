function age(classification) {
    if (classification <= 13) {
        console.log("Age ===> Child")
    }
    else if (classification >= 13 && classification <= 20) {
        console.log("Age ===> Teenager")
    }
    else if (classification >= 20 && classification <= 60) {
        console.log("Age ===> Adult")
    }
    else {
        console.log("Age ===> Senior")
    }
}

age(45)