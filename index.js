import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'Title Page!'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact Page'
    }
};

function render(state){
    // functions are invoked to return the results for each
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
`;
    console.log('state came in as ', state);
}
render(states.home);

// Navigation listeners. Elements will not exist until page is rendered.
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

// Use i as the index of navigation items. Index runs from 0 to 1 less than number of items
let i = 0;
/*
// assign event listener to each navigation item
while(i < navItems.length){
    navItems[i].addEventListener('click',
        function clickHandler(event){
            event.preventDefault();
            render(states[event.target.textContent.toLowerCase()]);
            // console.log('hello');
            console.log(event.target.textContent);

            // console.log(i);
        });
    i += 1;
}
*/

navItems.forEach((element) => {
    function clickHandler(event){
        event.preventDefault();
        render(states[event.target.textContent.toLowerCase()]);
        // console.log('hello');
        console.log(event.target.textContent);
    }
});


// Re-render our page based on what the user clicks in our navigation menu
/*
    1. Capture wat was clicked in navigation - what is the text of the element that was clicked
    2. Access a piece of state based on said text
    3. Show the user the new view (call Render function)

    */