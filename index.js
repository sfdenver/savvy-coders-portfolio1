import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Navigo constructor function from the node 'navigo'
import Navigo from 'navigo';
import * as store from './store';
console.log('Store came in as ', store);
import Axios from 'axios';
// import { Http2SecureServer } from 'http2';

const router = new Navigo(location.origin);

function render(state){
    // functions are invoked to return the results for each
    console.log('render using state = ', state);
    document.querySelector('#root').innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Main(state)}
      ${Footer(state)}
    `;
    // updatePageLinks works with 'data-navigo' and the <a href> links in Navigation component
    router.updatePageLinks();
}

// testing line:  console.log('state came in as ' + state);


/** following code was replaced with navigo functionality

// Navigation listeners. Elements will not exist until page is rendered.
// event handlers are reattached each time page is rendered

const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click',
        function clickHandler(event){
            event.preventDefault();
            console.log('click function ' + event.target.textContent);
            render(store[event.target.textContent.toLowerCase()]);
            // console.log('hello');
        });
});
// end of replace code
*/

// request to render a page passes in a selected state.
console.log(store.home);
render(store.home);

/**
  .on is a Navigo method - behaves as any event listener
  .on 'listens' to location.pathname and responds accordingly
  ref:  https://github.com/krasimir/navigo#parameterized-urls
  Whatever comes in as 'location.pathname',
  'save' that in the 'params' object under the key 'page.'
*/
// what does .resolve do?

router
    .on(':view', (params) => {
        render(store[params.view]);
    })
    .resolve();

/*
axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    const blogPosts = response.data;
    const blogHTML = blogPosts
        .map(
            (blogPost) => `
              <section>
              <h2>${blogPost.title}</h2>
              <p>${blogPost.body}</p>
              </section>
            `
        )
        .join(' ');

    store.blog.page = blogHTML;
});
*?

/**
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((response) => {
    const blogHTML = response.map((blogPost) => `
    <section>
        <h2>${blogPost.title}</h2>
        <p>${blogPost.body}</p>
    </section>
    `).join(' ');

    store.blog.page = blogHTML;
});
*/