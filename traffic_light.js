function traffic(light) {
    if (light == "red") {
        console.log("Stop")
    } else if (light == "yellow") {
        console.log("get ready")
    } else if (light == "green") {
        console.log("Go Go Go")
    } else{
        console.log("Undifine Color")
    }
}

traffic("yellow")