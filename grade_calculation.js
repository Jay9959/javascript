function grade(marks) {
    if (marks >= 90) {
        console.log("Garde ===> A+")
    }
    else if (marks >= 80 && marks <= 89) {
        console.log("Garde ===> A")
    }
    else if (marks >= 70 && marks <= 79) {
        console.log("Garde ===> B+")
    }
    else if (marks >= 60 && marks <= 69) {
        console.log("Garde ===> B")
    }
    else if (marks >= 50 && marks <= 59) {
        console.log("Garde ===> C")
    }
    else {
        console.log("fali")
    }
}

grade(85)