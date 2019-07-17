// Project FizzBuzz

/* Part 1 - does FizzBuzz once
  1. Create function fizBuzz with one input
  2. If input number is divisible by 3 or 5, display FizzBuzz
  3. If input number is divisible by 3, display Fizz
  4. If input number is divisible by 5, display Buzz
  5. If input number is none of the above, and an integer, display Not divisible by 3 or 5
  6. all other cases, display error message Not an Integer

  Part 2 - place FizzBuzz in a While Loop up to 100
*/

// function declaration

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }
    if(num % 3 === 0){
        return 'Fizz';
    }
    if(num % 5 === 0){
        return 'Buzz';
    }

    return 'Not divisible by 3 or 5';
}

// Part 1 validation
console.log('Part 1 FizzBuzz validation');
console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(4.1));
console.log(fizzBuzz('four'));

// Part 2 While loop
console.log('Part 2 FizzBuzz in a While loop');
let number2 = 0;
const incr = 2;

console.log(' Increment by ' + incr);

while(number2 <= 60){
    console.log(number2 + '  ' + fizzBuzz(number2));
    number2 += incr;
}
console.log('Part 2 is finished with While loop');


// Previous homework

let name = prompt('What is your name?');

const checkName = function(){
    if(name === ''){
        name = prompt('What is your name, for real this time?');

        checkName(); // repeats until a name exists
    }
};

checkName(); // kicks off the name-checking the first time

alert('Hello ' + name);

alert("Let's play a game");

let gameName = prompt('What game should we play?');

const whatGame = function(){
    if(gameName === ''){
        gameName = prompt('Its time to play a game! Pick a game now!');

        whatGame(); // repeats until a name exists
    }
};

whatGame(); // kicks off naming a game to play the first time

alert('Great - we will play' + gameName);