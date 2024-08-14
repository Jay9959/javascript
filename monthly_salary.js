function calculateMonthlySalary(hoursWorked) {
    let salary = 0;

    if (hoursWorked <= 40) {
        salary = hoursWorked * 15;
    } else if (hoursWorked <= 60) {
        salary = (40 * 15) + ((hoursWorked - 40) * 20);
    } else {
        salary = (40 * 15) + (20 * 20) + ((hoursWorked - 60) * 25);
    }

    return salary;
}

let hoursWorked = 15674; 
let salary = calculateMonthlySalary(hoursWorked);
console.log("The monthly salary is: $" + salary);