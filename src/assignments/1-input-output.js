/*
Program 1: Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/
// start here writing the code for program1

let firstName= prompt("enter your firstname:");
let lastName= prompt("enter your last name");
const fullName= firstName+lastName;


console.log(fullName)
console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName[2])