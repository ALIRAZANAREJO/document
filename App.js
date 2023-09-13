
                       // Assinment #01
// Quetion#01 : Write a program that takes input a name from user & greet the
// user like this:
var username = prompt('Enter your name')
alert('hi'+username)


var username = prompt('Enter your Age')
alert('Young'+username)


var username = prompt('Enter your Height')
alert('smart'+username)
var username = prompt('Enter your Batch')
alert(''+username)


var username = prompt('Enter your Roll no')
alert('you are Login'+username)

// Quetion#02: Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default

function generateMultiplicationTable() {
    // Prompt user for a number
    var userInput = prompt("Enter a number (default is 5):");

    // Convert user input to a number or default to 5
    var number = parseInt(userInput) || 5;

    // Generate multiplication table
    var table = "<h2>Multiplication Table of " + number + "</h2><table border='1'>";
    for (var i = 1; i <= 10; i++) {
        table += "<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>";
    }
    table += "</table>";

    // Display the table in the browser
    document.write(table);
}

// Call the function to generate the table
generateMultiplicationTable();

//Quetion#03: Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

function welcomeMessage() {
    var cityName = prompt("Enter the name of your city:");

    if (cityName === "Karachi") {
        alert("Welcome to the city of lights");
    } else {
        alert("Welcome!");
    }
}

// Quetion#04 :Write a program  in javascript to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am. i


function greetUser() {
    var gender = prompt("Enter your gender (male/female):").toLowerCase();

    if (gender === "male") {
        alert("Good Morning Sir.");
    } else if (gender === "female") {
        alert("Good Morning Ma’am.");
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

// Call the function to greet the user
greetUser();


//question#04:Write a program  in javascript to take input color of road traffic signal from
// the user & show the message according to this tableWrite a program to take input color of road traffic signal from
// the user & show the message according to this table

function trafficSignalMessage() {
    var color = prompt("Enter the color of the traffic signal (red/yellow/green):").toLowerCase();

    switch (color) {
        case "red":
            alert("STOP! The light is red.");
            break;
        case "yellow":
            alert("Be ready to STOP. The light is about to turn red.");
            break;
        case "green":
            alert("You may GO now. The light is green.");
            break;
        default:
            alert("Invalid input. Please enter 'red', 'yellow', or 'green'.");
    }
}

// Call the function to show the message
trafficSignalMessage();


//question#05: Write a program in javscript  to take input max age & current age from
// user. If the current age is less than or equal to max age, show  the message “You are welcome”

function welcomeMessage() {
    var maxAge = parseInt(prompt("Enter the maximum allowed age:"));
    var currentAge = parseInt(prompt("Enter your current age:"));

    if (currentAge <= maxAge) {
        alert("You are welcome.");
    } else {
        alert("Sorry, you are not allowed.");
    }
}

// Call the function to display the welcome message
welcomeMessage();

//question#06: Write a program in javscript
// to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”

function checkFuel() {
    var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

    if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car.");
    } else {
        alert("You have enough fuel.");
    }
}

// Call the function to check the fuel level
checkFuel();



//question#07:Write a program  in javascript to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table: 


function calculatePercentageAndGrade() {
    var subject1Marks = parseInt(prompt("Enter marks obtained in subject 1:"));
    var subject2Marks = parseInt(prompt("Enter marks obtained in subject 2:"));
    var subject3Marks = parseInt(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseInt(prompt("Enter total marks:"));

    var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    var grade;

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.write("<h2>Result:</h2>");
    document.write("<p>Total Marks: " + totalMarks + "</p>");
    document.write("<p>Obtained Marks: " + totalObtainedMarks + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
    document.write("<p>Grade: " + grade + "</p>");
}

// Call the function to calculate percentage and grade
calculatePercentageAndGrade();


//question#08: 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
// USER	INPUT	&	CONDITIONAL	STATEMENTS |	JAVASCRIPT
// Page	5 of	12
// d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
e. if (true)
{
 alert("True");
}
if (false){
 alert("False");
}
f. if("car" < "cat")
{
 alert("car is smaller than cat");
}


// Quetion#09: Write a program in javascript  to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:9. Write a program in javascript  to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:

function calculatePercentageAndGrade() {
    var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    var grade;

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.write("<h2>Result:</h2>");
    document.write("<p>Total Marks: " + totalMarks + "</p>");
    document.write("<p>Obtained Marks: " + totalObtainedMarks + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
    document.write("<p>Grade: " + grade + "</p>");
}

// Call the function to calculate percentage and grade
calculatePercentageAndGrade();


//question#10: Write a program  in javscript to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser

function calculateTotalCost() {
    // Prompt user for input
    var item1Name = prompt("Enter the name of item 1:");
    var item2Name = prompt("Enter the name of item 2:");
    var item1Price = parseFloat(prompt("Enter the price of item 1 (in PKR):"));
    var item2Price = parseFloat(prompt("Enter the price of item 2 (in PKR):"));
    var item1Quantity = parseInt(prompt("Enter the quantity of item 1:"));
    var item2Quantity = parseInt(prompt("Enter the quantity of item 2:"));
    var shippingCharges = parseFloat(prompt("Enter the shipping charges (in PKR):"));

    // Calculate total cost
    var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

    // Apply discount if total cost is above 2000 PKR
    if (totalCost > 2000) {
        var discount = totalCost * 0.1;
        totalCost -= discount;
    }

    // Display receipt
    document.write("<h2>Receipt</h2>");
    document.write("<p>Item 1: " + item1Name + ", Quantity: " + item1Quantity + ", Price: " + item1Price + " PKR</p>");
    document.write("<p>Item 2: " + item2Name + ", Quantity: " + item2Quantity + ", Price: " + item2Price + " PKR</p>");
    document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
    document.write("<p>Total Cost: " + totalCost.toFixed(2) + " PKR</p>");
}

// Call the function to calculate total cost and display receipt
calculateTotalCost();



//question#11:   write a program in javascript to make Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

function playGuessGame() {
    var secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer.");
    } else if (Math.abs(userGuess - secretNumber) === 1) {
        alert("Close enough to the correct answer.");
    } else {
        alert("Sorry, wrong guess. The correct answer was " + secretNumber + ".");
    }
}

// Call the function to play the game
playGuessGame();
function playGuessGame() {
    var secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer.");
    } else if (Math.abs(userGuess - secretNumber) === 1) {
        alert("Close enough to the correct answer.");
    } else {
        alert("Sorry, wrong guess. The correct answer was " + secretNumber + ".");
    }
}

// Call the function to play the game
playGuessGame();


//question#12:   Write a program in javascrript  to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

function checkDivisibilityBy3() {
    var number = parseInt(prompt("Enter a number:"));

    if (number % 3 === 0) {
        alert(number + " is divisible by 3.");
    } else {
        alert(number + " is not divisible by 3.");
    }
}

// Call the function to check divisibility by 3
checkDivisibilityBy3();


//question#13: write a program in javscript to make an Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

function determineWinner() {
    var teamAName = prompt("Enter the name of Team A:");
    var teamBName = prompt("Enter the name of Team B:");
    var teamAScore = parseInt(prompt("Enter the total score of Team A:"));
    var teamBScore = parseInt(prompt("Enter the total score of Team B:"));

    if (teamAScore > teamBScore) {
        alert("Team " + teamAName + " has won the game!");
    } else if (teamBScore > teamAScore) {
        alert("Team " + teamBName + " has won the game!");
    } else {
        alert("It's a tie! Both teams have the same score.");
    }
}

// Call the function to determine the winner
determineWinner();



//question#14:  write a program in javascript to  Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

function checkVariableTypes(stringVar, numberVar, booleanVar) {
    var result = "";

    if (typeof stringVar === 'string') {
        result += "The variable 'stringVar' is a string.\n";
    } else {
        result += "The variable 'stringVar' is not a string.\n";
    }

    if (typeof numberVar === 'number') {
        result += "The variable 'numberVar' is a number.\n";
    } else {
        result += "The variable 'numberVar' is not a number.\n";
    }

    if (typeof booleanVar === 'boolean') {
        result += "The variable 'booleanVar' is a boolean.\n";
    } else {
        result += "The variable 'booleanVar' is not a boolean.\n";
    }

    alert(result);
}

// Example usage
var stringVar = "Hello";
var numberVar = 42;
var booleanVar = true;

checkVariableTypes(stringVar, numberVar, booleanVar);


//question#15: Write a program in javascipt  that checks whether the given input is an
// even number or an odd number

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

var userInput = parseInt(prompt("Enter a number:"));

var result = checkEvenOrOdd(userInput);

alert(userInput + " is an " + result + " number.");


//question#16:  write  apogam in javascriptWeather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

function weatherMessage(temperature) {
    if (temperature > 40) {
        return "It is too hot outside.";
    } else if (temperature > 30) {
        return "The Weather today is Normal.";
    } else if (temperature > 20) {
        return "Today’s Weather is cool.";
    } else {
        return "OMG! Today’s weather is so Cool.";
    }
}

var userTemperature = parseFloat(prompt("Enter the temperature in Karachi:"));

var message = weatherMessage(userTemperature);

alert(message);


//question#17: Write a program  in javascript 
// to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

function calculateResult(firstNumber, secondNumber, operation) {
    var result;

    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else {
        return "Invalid operation!";
    }

    return "Result: " + result;
}

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var resultMessage = calculateResult(firstNumber, secondNumber, operation);

alert(resultMessage);


//question#18: Write a program  injavascript that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

function checkDayType(day) {
    switch (day.toLowerCase()) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "It’s a week day.";
        case "saturday":
            return "It’s weekend.";
        case "sunday":
            return "Yay! It’s a holiday.";
        default:
            return "Invalid input. Please enter a valid day.";
    }
}

var userInput = prompt("Enter a day:");

var message = checkDayType(userInput);

alert(message);



//  Quetion#19:  Write a program  in javascrip  to make that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

function checkScore(score) {
    if (score > 50) {
        return "You are passed.";
    } else {
        return "Try again!";
    }
}

var userScore = parseFloat(prompt("Enter your score:"));

var message = checkScore(userScore);

alert(message);


//  Quetion#20: Write a program in javascript  that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10."). 


//Quetion#21: The Translator:
// Write a program in javascript  that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)

function translateHelloWorld(languageCode) {
    switch (languageCode.toLowerCase()) {
        case "es":
            return "¡Hola, Mundo!";
        case "de":
            return "Hallo, Welt!";
        case "en":
            return "Hello, World!";
        default:
            return "Hello, World!";
    }
}

var userLanguageCode = prompt("Enter the language code (e.g. es, de, en):");

var greeting = translateHelloWorld(userLanguageCode);

alert(greeting);


//Question#22: Write a program  in javascript to take input a number & tell whether it’s a
// positive or negative number.

function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "The number is positive.";
    } else if (number < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

var userInput = parseFloat(prompt("Enter a number:"));

var message = checkPositiveOrNegative(userInput);

alert(message);



//Question#23: The Pluralizer: Write a program in javascript  that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".

function pluralizeNoun(noun, number) {
    if (number === 1) {
        return number + " " + noun;
    } else {
        return number + " " + noun + "s";
    }
}

var userNoun = prompt("Enter a noun:");
var userNumber = parseInt(prompt("Enter a number:"));

var result = pluralizeNoun(userNoun, userNumber);

alert(result);


<END></END>