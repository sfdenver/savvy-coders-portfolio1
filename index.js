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