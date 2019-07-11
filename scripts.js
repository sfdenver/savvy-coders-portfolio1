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
*/
const name = prompt('What is your name');

console.log(name);
/*
  if (name === ''){

}
*/
const greetings = {
    'general': 'Hello World',
    'morning': 'Good Morning',
    'afternoon': 'Good Afternoon',
    'simple': 'Hello'
};

// mdn query selector
console.log(`Hello, ${name}`);

if((name !== '')){
    console.log('Thanks! ' + name);
}
 else{
    name = prompt('What is your name, for real this time?');
}
// console.log(String(333.0));

// console.log(document.querySelector(`Hello, ${name}));
console.log(document.querySelector('h1').textContent = `Hello ${name}`);
// comments