/* Write program function call in function */

function foo() {
    console.log("Foo");
    bar()
}

function bar() {
    console.log("Bar");
}

foo();


/* Make average number using function */

function make_average(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;

}

let resultOfAverage = make_average(10, 30, 50);
console.log(resultOfAverage);



/* Write a program can take a array and sum the element of array and calculate average of array element */

function avg(number) {
    let temp = 0, sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        temp++
    }
    return sum / temp;
}
var numbers = [50, 10, 85, 76, 80, 100];
let resultSum = avg(numbers);
console.log(resultSum.toFixed(2));
