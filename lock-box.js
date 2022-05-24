const prompt = require('prompt-sync')({sigint: true}); 

let passCode = prompt("Enter the passcode: ");
let x = ("1234");

if (passCode === x) {
    console.log("Success!")
}
else {console.log("Failure :(")};



