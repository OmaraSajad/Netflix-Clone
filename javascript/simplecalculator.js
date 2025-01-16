// SIMPLE CALCULATOR
const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Enter value of num1: "))
const num2 = parseFloat(prompt("Enter value of num2: "))
const op = prompt("Enter operator (+,-,*,/,%,**): ")
let result;
if (op == '+') {
    result = num1 + num2;
    console.log("Result is: ", result);
}
else if (op == '-') {
    result = num1 - num2;
    console.log("Result is: ", result);
}
else if (op == '*') {
    result = num1 * num2;
    console.log("Result is: ", result);
}
else if (op == '/') {
    result = num1 / num2;
    console.log("Result is: ", result);
}
else if (op == '%') {
    result = num1 % num2;
    console.log("Result is: ", result);
}
else if (op == '**') {
    result = num1 ** num2;
    console.log("Result is: ", result);
}
else {
    console.log("Invalid argument")
}