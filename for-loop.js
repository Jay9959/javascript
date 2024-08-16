// 1. Print Numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Sum of Numbers from 1 to 10

let sum = 0
for (let i = 0; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);

// 3. Print Squares of Numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

// 4. Print Even Numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 5. Print Odd Numbers from 1 to 15

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// 7. Print Multiples of 3 up to 30

let table = 3

for (i = 1; i <= 10; i++) {
    console.log(table + "X" + i + "=" + table * i)
}

// 8. Countdown from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 9. Print a Repeated Message

for (let i = 1; i <= 5; i++) {
    console.log(i ,"Hello, World!");
}

// 10. Sum of Numbers from 5 to 15

let num = 0
for (let i = 5; i <= 15; i++) {
    num = num + i;
}
console.log(num);