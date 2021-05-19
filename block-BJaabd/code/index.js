// Condition
// Write Your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = +prompt(`Enter your age`);
if(age >= 12 && age <= 55){
  alert(`You can participate in the marathon`);
}else if(age >= 4  && age <= 11){
  alert(`You are too young to participate in the marathon`);
}else if(age < 4){
  alert(`Hey, Kiddo! can you walk?`);
}else {
  alert(`You are too old to participate in the marathon`);
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let count = +prompt(`Enter the value of n`);
let letter = "";
for(let i = 0; i < count; i++){
  letter += "e";
}
alert(`h` + letter + 'llo');

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

const n = +prompt(`Enter the value of n`);
let sum = 0;
for(let i = 1; i <= n; i++){
  sum += i;
}
alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let message = +prompt(`Enter a number between 1 to 9`);

switch(message){
  case 1:
    alert(`ONE`);
    break;
  case 2:
    alert(`ONE`);
    break;
  case 3:
    alert(`TWO`);
    break;
  case 4:
    alert(`FOUR`);
    break;
  case 5:
    alert(`FIVE`);
    break;
  case 6:
    alert(`SIX`);
    break;
  case 7:
    alert(`SEVEN`);
    break;
  case 8:
    alert(`EIGHT`);
    break;
  case 9:
    alert(`NINE`);
    break;
  default:
    alert(`PLEASE TRY AGAIN`);               
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt(`Enter Your marks`);

switch(true) {
  case marks > 90:
    alert(`Your grade is AA`);
    break;
  case marks > 80 && marks <=90:
    alert(`Your grade is AB`);
    break;
  case marks > 70 && marks <=80:
    alert(`Your grade is BB`);
    break;
  case marks > 60 && marks <=70:
    alert(`Your grade is BC`);
    break;
  case marks > 50 && marks <=60:
    alert(`Your grade is CC`);
    break;
  case marks > 40 && marks <=50:
    alert(`Your grade is CD`);
    break;
  case marks > 30 && marks <=40:
    alert(`Your grade is DD`);
    break;
  case marks <=30:
    alert(`Your grade is FF`);
    break;                   
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
 
*/
// [Your code goes here]
var int1 = +prompt(`Enter the first number`);
var int2 = +prompt(`Enter the second number`);
if(int1 > int2){
  alert(`First number ${int1} is larger`);
}else {
  alert(`Second number ${int2} is larger`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let value1 = prompt(`Enter 1st number`);
let value2 = prompt(`Enter 2nd number`);
let value3 = prompt(`Enter 3rd number`);
let product = value1 * value2 * value3;
if(product >= 0){
  alert(`Sign is +`);
}else {
  alert(`Sign is -`);
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let cal1 = +prompt(`Enter 1st number`);
let cal2 = +prompt(`Enter 2nd number`);
let cal3 = prompt(`Chose the operation: +, -, *, /`);
if(cal1 < cal2){
  alert(`Second number is larger`);
}
 else if (cal3 === "+"){
  alert(`The result is ${cal1 + cal2}`);
}
else if (cal3 === "-"){
  alert(`The result is ${cal1 - cal2}`);
}
else if (cal3 === "*"){
  alert(`The result is ${cal1 * cal2}`);
}
else if (cal3 === "/"){
  alert(`The result is ${cal1 / cal2}`);
} else {
  alert(`Not a number`);
}