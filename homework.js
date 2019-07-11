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
 else if(num % 3 === 0){
        return 'Fizz';
    }
 else if(num % 5 === 0){
        return 'Buzz';
    }
 else if(num % 1 === 0){
        return 'Not divisible by 3 or 5';
    }
}

// Part 1 validation
console.log('Part 1 FizzBuzz validation');
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(4.1));
console.log(fizzBuzz('four'));

// Part 2 While loop
console.log('Part 2 FizzBuzz in a While loop');
let number2 = 0;
const incr = 2;

while(number2 <= 60){
    console.log(number2 + '  ' + fizzBuzz(number2));
    number2 += incr;
}
console.log('Part 2 is finished with While loop');