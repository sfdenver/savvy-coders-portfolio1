// document.querySelector('h1').textContent = greetings.morning;

// Create a greeter function that will use a person's name and display "Hello, name" in <h1>

/*
  Logic flow:
  1. Ask the user for their name
  1.b Handle data entry exception of Null
  2. Save name in memory
  3. Concatenate a string with "Hello" and User's name
  4. Select the <h1> tag on the correct page
  5. Replace the value of the <h1> tag

  New requirements
  - ask for first and last name separate
  - display both names in Greeting
*/
const fname = prompt('What is your first name?');
const lname = prompt('What is your last name?');
/*
while(fname === '' || lname === ''){
    const fname = prompt('What is your first name?');
    const lname = prompt('What is your last name?');
}
*/
// mdn query selector

console.log(`Hello, ${fname}, ${lname}`);
/*
if((name !== '')){
    console.log('Thanks! ' + name);
}
 else{
    name = prompt('What is your name, for real this time?');
}
*/
// console.log(String(333.0));

// console.log(document.querySelector(`Hello, ${name}));
console.log(document.querySelector('h1').innerHTML = `Hello, ${fname} ${lname}`);
// comments