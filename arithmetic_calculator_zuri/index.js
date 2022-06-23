let operator = prompt('Please enter the operator you want to perform\n e.g +/-*');

//collect user input
let number1 = parseInt(prompt("Number 1"));
let number2 = parseInt(prompt("Number 2"));

let result;

//conditional statement
if (operator === "+") {
   result = number1 + number2;
}
else if (operator === "-") {
   result = number1 - number2;
}
else if (operator === "*") {
   result = number1 * number2;
}
else {
   result = number1 / number2;
}

//show  the result
alert(`result is ${number1} ${operator} ${number2} = ${result}`);