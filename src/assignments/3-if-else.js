/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

const num1=20;
const num2=10;

if (num1>num2) {
    console.log(`minimum=${num2}`);
    }else{
        console.log(`minimum=${num1}`)
    }

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2

let letter=prompt('input your letter');

if (typeof letter==='string' && letter.length===1 && /[a-z]/.test(letter)) {
    letter = letter.toLowerCase(); //To ensure the letter is case insensitive
    if (letter=== 'a'||letter=== 'e'||letter=== 'i'||letter=== 'o'||letter=== 'u') {
        console.log(`letter is vowel`)
    } else {
        console.log('letter is consonant')
    }
    
}else{
    console.log ("Error: please input a single letter")
}
