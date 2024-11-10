/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1

let letter = prompt('Input your letter');
letter = letter.toLowerCase(); // Ensure the letter is case insensitive

// Check if the input is a valid single letter
if (typeof letter === 'string' && letter.length === 1 && /[a-z]/.test(letter)) {
    switch (true) {
        case (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'):
            console.log('Letter is a vowel');
            break;
        default:
            console.log('Letter is a consonant');
            break;
    }
} else {
    console.log('Input is not valid');
}
