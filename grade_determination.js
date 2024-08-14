function grade(determination) {
    if (determination >= 90 && determination <= 100) {
        console.log("Garde is a A");
    } else if (determination >= 80 && determination <= 89) {
        console.log("Garde is a B");
    } else if (determination >= 70 && determination <= 79) {
        console.log("Garde is a C");
    } else if (determination >= 60 && determination <= 69) {
        console.log("Garde is a D");
    } else {
        console.log("Garde is a F");
    }
}

// grade(90) Grade Determination