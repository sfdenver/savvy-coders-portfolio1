import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const state = {
    'title': 'this is the page Title!'
};


// functions are invoked to return the results for each
document.querySelector('#root').innerHTML = `
  ${Navigation()}
  ${Header()}
  ${Main()}
  ${Footer()}
`;

console.log(Navigation, Header, Main, Footer);