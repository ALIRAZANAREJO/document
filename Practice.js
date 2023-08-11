
//#1
// Ask the user to enter their age using prompt
var userAge = prompt("Please enter your age:");

// Convert the user input to a number
var age = parseInt(userAge);

// Check the age and display the appropriate category
if (age >= 0 && age <= 12) {
    console.log("You are a Child");
} else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager");
} else if (age >= 20 && age <= 29) {
    console.log("You are a Young Adult");
} else if (age >= 30) {
    console.log("You are an Adult");
} else {
    console.log("Invalid input");
}


//#2
// Ask the user to enter their choice of coffee size using prompt
var coffeeSize = prompt("Please enter your coffee size (small, medium, large):");

// Convert the user input to lowercase for easier comparison
coffeeSize = coffeeSize.toLowerCase();

// Define the price for each coffee size
var smallPrice = 3.50;
var mediumPrice = 4.75;
var largePrice = 5.50;

// Check the coffee size and display the corresponding price
if (coffeeSize === "small") {
    console.log("Price: $" + smallPrice);
} else if (coffeeSize === "medium") {
    console.log("Price: $" + mediumPrice);
} else if (coffeeSize === "large") {
    console.log("Price: $" + largePrice);
} else {
    console.log("Error: Invalid coffee size");
}



//#3
// Ask the user to enter their GPA using prompt
var userGPA = prompt("Please enter your GPA:");

// Convert the user input to a number
var GPA = parseFloat(userGPA);

// Check the GPA and determine academic standing
if (GPA > 3.5) {
    console.log("Excellent");
} else if (GPA >= 3.0 && GPA <= 3.5) {
    console.log("Good");
} else if (GPA < 3.0) {
    console.log("Needs Improvement");
} else {
    console.log("Invalid input");
}


//#4
// Ask the user to enter their GPA using prompt
var userGPA = prompt("Please enter your GPA:");

// Convert the user input to a number
var GPA = parseFloat(userGPA);

// Check the GPA and determine academic standing
if (GPA > 3.5) {
    console.log("Excellent");
} else if (GPA >= 3.0 && GPA <= 3.5) {
    console.log("Good");
} else if (GPA < 3.0) {
    console.log("Needs Improvement");
} else {
    console.log("Invalid input");
}


//#5
// Ask the user to enter scores for three subjects using prompt
var mathScore = parseFloat(prompt("Enter your Math score:"));
var scienceScore = parseFloat(prompt("Enter your Science score:"));
var historyScore = parseFloat(prompt("Enter your History score:"));

// Calculate the average score
var averageScore = (mathScore + scienceScore + historyScore) / 3;

// Determine the letter grade based on the average score
var letterGrade;

if (averageScore >= 90) {
    letterGrade = "A";
} else if (averageScore >= 80 && averageScore < 90) {
    letterGrade = "B";
} else if (averageScore >= 70 && averageScore < 80) {
    letterGrade = "C";
} else if (averageScore >= 60 && averageScore < 70) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

// Display the average score and letter grade
console.log("Average Score: " + averageScore.toFixed(2));
console.log("Letter Grade: " + letterGrade);



//#6
// Ask the user to enter a number using prompt
var userInput = parseFloat(prompt("Please enter a number:"));

// Check if the number is positive, negative, or zero
if (userInput > 0) {
    console.log("The number is positive.");

    // Check if the positive number is even or odd
    if (userInput % 2 === 0) {
        console.log("The positive number is even.");
    } else {
        console.log("The positive number is odd.");
    }
} else if (userInput < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


//#7
// Ask the user to enter the total purchase amount using prompt
var purchaseAmount = parseFloat(prompt("Please enter the total purchase amount:"));

// Check if the purchase amount is greater than $100
if (purchaseAmount > 100) {
    // Calculate the discount (10%)
    var discount = purchaseAmount * 0.1;

    // Calculate the final price after applying the discount
    var finalPrice = purchaseAmount - discount;

    // Display the discounted amount and the final price
    console.log("Discounted Amount: $" + discount.toFixed(2));
    console.log("Final Price: $" + finalPrice.toFixed(2));
} else {
    console.log("No discount applied. Final Price: $" + purchaseAmount.toFixed(2));
}



//#8
// Ask the user to enter their weight (in kilograms) and height (in meters) using prompt
var weight = parseFloat(prompt("Please enter your weight in kilograms:"));
var height = parseFloat(prompt("Please enter your height in meters:"));

// Calculate BMI using the formula: BMI = weight / (height * height)
var BMI = weight / (height * height);

// Determine the BMI category and display the result
var category;

if (BMI < 18.5) {
    category = "Underweight";
} else if (BMI >= 18.5 && BMI < 24.9) {
    category = "Normal";
} else if (BMI >= 25 && BMI < 29.9) {
    category = "Overweight";
} else {
    category = "Obese";
}

// Display the calculated BMI and category
console.log("Your BMI is: " + BMI.toFixed(2));
console.log("BMI Category: " + category);



//#9
// Ask the user to enter a password using prompt
var password = prompt("Please enter your password:");

// Calculate the length of the entered password
var passwordLength = password.length;

// Determine the password strength based on the length
var strength;

if (passwordLength <= 6) {
    strength = "Weak";
} else if (passwordLength > 6 && passwordLength <= 10) {
    strength = "Medium";
} else {
    strength = "Strong";
}

// Display the password strength
console.log("Password Strength: " + strength);










//#10
// Ask the user to enter their age using prompt
var userAge = parseInt(prompt("Please enter your age:"));

// Ask the user about their citizenship status using prompt
var isCitizen = confirm("Are you a citizen? Click OK for Yes, Cancel for No.");

// Check if the user is eligible to vote based on age and citizenship status
if (userAge >= 18 && isCitizen) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}







//#11
// Ask the user to select a direction using prompt
var direction = prompt("Please select a direction (North, East, South, West):");

// Convert the user input to lowercase for easier comparison
direction = direction.toLowerCase();

// Provide descriptions based on the selected direction
switch (direction) {
    case "north":
        console.log("Heading North, you might find forests and mountains.");
        break;
    case "east":
        console.log("Heading East, you might find bustling cities and the sunrise.");
        break;
    case "south":
        console.log("Heading South, you might find beaches and warmer weather.");
        break;
    case "west":
        console.log("Heading West, you might find coastal views and beautiful sunsets.");
        break;
    default:
        console.log("Unknown direction. Please select a valid direction.");
}

// Ask the user to enter their fitness goal using prompt
var fitnessGoal = prompt("Please enter your fitness goal (e.g., Lose weight, Build muscle, Stay healthy):");

// Convert the user input to lowercase for easier comparison
fitnessGoal = fitnessGoal.toLowerCase();

// Provide fitness tips based on the selected goal
switch (fitnessGoal) {
    case "lose weight":
        console.log("For weight loss, focus on a balanced diet and regular cardiovascular exercises.");
        break;
    case "build muscle":
        console.log("For building muscle, prioritize strength training and protein-rich diet.");
        break;
    case "stay healthy":
        console.log("To stay healthy, engage in a combination of cardio, strength training, and a balanced diet.");
        break;
    default:
        console.log("Unknown goal. Please enter a valid fitness goal.");
}






