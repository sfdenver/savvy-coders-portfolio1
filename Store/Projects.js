const project1 = {
    'links': {
        'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
        'dropdown': [ 'Project1', 'Project2', 'Project3' ]
    },
    'title': 'Project 1',
    'page': `
    <h2>Project 1 - FizzBuzz</h2>
        <p>Part 1 - Performs FizzBuzz once
        <br>1. Create function fizBuzz with one input
        <br>2. If input number is divisible by 3 or 5, display FizzBuzz
        <br>3. If input number is divisible by 3, display Fizz
        <br>4. If input number is divisible by 5, display Buzz
        <br>5. If input number is none of the above, and an integer, display Not divisible by 3 or 5
        <br>6. all other cases, display error message Not an Integer
        <br>
        <br>Part 2 - place FizzBuzz in a While Loop up to 100
        <br>
        <br>View Console for results
        </p>

        <Script>

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
        </Script>
        `
};

const project2 = {
    'links': {
        'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
        'dropdown': [ 'Project1', 'Project2', 'Project3' ]
    },
    'title': 'Project 2',
    'page': `
    <h2>Project 2</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
    `
};

const project3 = {
    'links': {
        'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
        'dropdown': [ 'Project1', 'Project2', 'Project3' ]
    },
    'title': 'Project 3',
    'page': `
    <h2>Project 3</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
    `
};

export { project1, project2, project3 };