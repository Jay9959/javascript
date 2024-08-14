function age(basic) {
    if (basic >= 0 && basic <= 12) {
        console.log("Child");
    } else if (basic >= 13 && basic <= 19) {
        console.log("Teenager");
    } else if (basic >= 20 && basic <= 64) {
        console.log("Adult");
    } else {
        console.log("Senior");
    }
}

age(17)