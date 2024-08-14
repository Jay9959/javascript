function temperature(range) {
    if (range <= 32) {
        console.log("Temperatures is 'Freezing' ")
    } else if (range > 32 && range <= 50) {
        console.log("Temperatures is 'Cold' ")
    } else if (range >= 51 && range <= 75) {
        console.log("Temperatures is 'Moderate' ")
    } else if (range >= 75) {
        console.log("Temperatures is 'Hot' ")
    } else {
        console.log("Temperatures is 'Very Hot' ")
    }
}

temperature(50)