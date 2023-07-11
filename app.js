//====================Assignment chapter (20-26)=========================//
//=====================String Methods=====================//

// Q1: Write a program tha takes two user inputs for first and last name using prompt and
// merge them in a new variable titled fullName. Greet the user using his full name.
// Ans:
// var firstName = prompt("What is your first name?");
// var firstChar = firstName.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChars = firstName.slice(1);
// otherChars = otherChars.toLowerCase();
// var capped = firstChar + otherChars;
// var lastName = prompt("What is your last name?");
// var firstCharLast = lastName.slice(0,1);
// firstCharLast = firstCharLast.toUpperCase();
// var otherCharsLast = lastName.slice(1);
// otherCharsLast = otherCharsLast.toLowerCase();
// var cappedLast = firstCharLast + otherCharsLast;
// var fullName = alert("Welcome " + capped + " " + cappedLast);



// Q2:Write a program to take a user input about his favorite mobile phone model.
// Find and display the length of user input in your browser!
// Ans:
// var favoriteMobilePhone = prompt("Write down your favorite mobile phone model.");
// document.write("My favorite phone is: " + favoriteMobilePhone + "<br>");
// document.write("Length of string is: " + favoriteMobilePhone.length + "<br>");



// Q3:Write a program to find the index of letter "n" in the word "Pakistan" and display the result in your browser.
// Ans:
// var word = "Pakistan";
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + word.indexOf("n") + "<br>");



// Q4:Write a program to find the last index of letter "l" in the word "Hello World" and display the result in your browser.
// Ans:
// var word = "Hello World";
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + word.lastIndexOf("l") + "<br>");



// Q5:Write a program to find the character at 3rd index in the word "Pakistan" and display the result in your browser:
// Ans:
// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3) + "<br>");



// Q6:Repeat the Q1 string concat method.
// Ans:
// var firstName = prompt("What is your first name?");
// var firstChar = firstName.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChars = firstName.slice(1);
// otherChars = otherChars.toLowerCase();
// var capped = firstChar + otherChars;
// var lastName = prompt("What is your last name?");
// var firstCharLast = lastName.slice(0,1);
// firstCharLast = firstCharLast.toUpperCase();
// var otherCharsLast = lastName.slice(1);
// otherCharsLast = otherCharsLast.toLowerCase();
// var cappedLast = firstCharLast + otherCharsLast;
// var result = alert("Welcome " + capped.concat(" " + cappedLast));



// Q7:Write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser.
// Ans:
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var replacement = city.replace("Hyder","Islam");
// document.write("After replacement: " + replacement + "<br>");



// Q8:Write a program to replace all occurance of "and" in the string with "&" and display the result in your browser.
// Ans:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement = message.replace(/and/g , "&");
// document.write("<b>After replacement of 'and' to '&':</b><br>" + replacement + "<br>");



// Q9:Write a program that converts a string "472" to a number 472. Display the value and types in your browser.
// Ans:
// var string = "472";
// var toNumber = Number(String);
// document.write("Value: " + string + "<br>Type: " + typeof(string) + "<br>");
// document.write("Value: " + string + "<br>Type: " + typeof(toNumber) + "<br>");



// Q10:Write a program that takes user input. Convert it and show the input in capital letters.
// Ans:
// var userInput = prompt("Write a word!");
// var upperCase = userInput.slice(0);
// upperCase = upperCase.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCase + "<br>");



// Q11:Write a program that takes user input. Convert and show the input in title case.
// Ans:
// var userInput = prompt("Write a word!");
// var firstChar = userInput.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChars = userInput.slice(1);
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCase + "<br>");



// Q12:Write a program that converts the variable num to string:
// var num = 35.36;
// Ans:
// var num = 35.36;
// var string = num.toString();
// string = string.replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + string);



// Q13:Write a program to take user input and store username in a variable . If username contains any special symbol
// among[@.,!], prompt the user to enter the valid username.
// Ans:
// var userInput = prompt("Enter your name!");
// var matchFound = false;
// for(var i = 0 ; i <= userInput.length ; i++){
//     if(userInput[i] === "!" || userInput[i] === "," || userInput[i] === "." || userInput[i] === "@"){
//         matchFound = true;
//         alert("Enter a valid username!");
//     }
// }
// if(matchFound === false){
//     alert("Okay!");
// }



// Q14: You have an array:
// A = ["cake”, “apple pie”, “cookie”, “chips”, “patties”], Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
// Ans:
// var bakeryItems = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to ABC Bakery,. What do you want to order Sir/Ma'am?");
// userInput = userInput.toLowerCase();
// var matchFound = false;
// for(var i = 0 ; i <= bakeryItems.length ; i++){
//     if(userInput === bakeryItems[i]){
//         matchFound = true;
//         alert(userInput + " is available at index "  + bakeryItems.indexOf(userInput) + " in our Bakery!");
//     }
// }
// if(matchFound === false){
//     alert("We are sorry, " + userInput + " is not available in our Bakery!");
// }



// Q15:. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// Ans:




// Q16: Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// Ans:
// var university = ("university of karachi");
// var universityWordArray = university.split("");
// for(var i = 0 ; i <= universityWordArray.length - 1 ; i++){
//     document.write(universityWordArray[i] + "<br>");
// }



// Q17:Write a program to display the last character of a user input.
// Ans:
// var userInput = prompt("Write a word!");
// var firstChar = userInput.charAt(0);
// firstChar = firstChar.toUpperCase();
// var otherChars = userInput.slice(1);
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("<b>User Input:</b> " + titleCase + "<br>");
// document.write("<b>Last character of input:</b> " + titleCase.charAt(titleCase.length-1) + "<br>");



// Q18: You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string.
// Ans:
// var string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// var theWord = string.split("the").length - 1;
// document.write("Text: " + string + "<br>" + " There are " + theWord + " occurences of word 'the' " ); 


//==================================Assignment completed===============//