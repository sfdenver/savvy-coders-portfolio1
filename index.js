import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Navigo constructor function from the node 'navigo'
import Navigo from 'navigo';

const router = new Navigo(location.origin);

const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },

        'title': 'This is the home page!',
        'page': `
        <section>
        <h2> Section 1 Header </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident,
        magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta,
        reiciendis distinctio,
        impedit accusantium libero!Iusto mollitia minus ipsam quam laborum!
        </p>
        <a href = "#" class = "cta-btn" >Read More!</a>
        </section>

        <section>
        <h2> Section 2 Header </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident,
        magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta,
        reiciendis distinctio, impedit accusantium libero!Iusto mollitia minus ipsam quam laborum!
        </p>
        <a href = "#" class = "cta-btn" > Read More! </a>
        </section>

        <section >
        <h2> Section 3 Header </h2> <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident,
        magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta,
        reiciendis distinctio,
        impedit accusantium libero!Iusto mollitia minus ipsam quam laborum!
        </p>
        <a href = "#" class = "cta-btn" >Read More! </a>

        </section>
        `
    },

    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': `
        <h2>About Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
        `
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact Page',
        'page': `
        <!--
        The action attribute defines where on the server the form data should be sent
        The method attribute specifies the HTTP method (GET or POST)
        -->

        <form action="form-responses/new" method="POST">
            <div class="input-group">

            <!-- Developer's Note: 'placeholder' without using < label > is NOT RECOMMENDED for accessibility purposes. -->
            <input type="text" name="firstname" placeholder="First Name" autofocus required />
            <input type="text" name="lastname" placeholder="Last Name" />
            <input type="email" name="userEmail" placeholder="your.email@example.com" />
            </div>

            <p>What's this message about?</p>

            <div class="input-group">
                <span>
                    <input type="radio" name="subject" value="professional" id="pro" checked />
                    <label for="pro">I'd like to hire you!</label>
                </span>

                <span>
                    <input type="radio" name="subject" value="personal" id="personal" />
                    <label for="personal">Personal message</label>
                </span>

                <span>
                    <input type="radio" name="subject" value="other" />
                    <label>Don't know/something else</label>
                </span>
            </div>

            <div class="input-group">
                <input type="checkbox" name="optin" value="trusting" checked />Subscribe me to
                    your newsletter!
                <input type="checkbox" name="optout" value="skeptical" disabled />Not at this time
            </div>

            <div class="input-group input-group--flex">

                <label for="marketing">How did you hear about me?</label>
                    <select name="marketing">
                    <optgroup label="Online">
                        <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                        <option value="github">Online Portfolio (GitHub)</option>
                        <option value="search">Search Engine</option>
                        <option value="email">Email</option>
                    </optgroup>
                    <optgroup label="In-Person">
                        <option value="networking">We met at a networking event</option>
                        <option value="referral">Personal referral</option>
                        <option value="random">We met somewhere else</option>
                    </optgroup>
                        <option value="other">Other</option>
                    </select>
            </div>

            <div class="input-group--flex">
                <textarea name="user_message" placeholder="Please provide comments and feedback!" rows="8" cols="40"></textarea>
                <div>
                    <input type="submit" />
                    <input type="reset" value="Reset">
                </div>
            </div>
        </form>

        `
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'My Blog Page',
        //
        'page': `
        <h2>Blog Posts</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
    `
    },

    // Sections for Project Placeholders
    'project 1': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Project 1',
        'page': `
        <h2>Project 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
        `
    },

    'project 2': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Project 2',
        'page': `
        <h2>Project 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
        `
    },

    'project 3': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Project 3',
        'page': `
        <h2>Project 3</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
        `
    },


};

function render(state){
    // functions are invoked to return the results for each
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


// Use i as the index of navigation items. Index runs from 0 to 1 less than number of items
/*
let i = 0;
// assign event listener to each navigation item
while(i < navItems.length){
    navItems[i].addEventListener('click',
        function clickHandler(event){
            event.preventDefault();
            render(store[event.target.textContent.toLowerCase()]);
            // console.log('hello');
            console.log(event.target.textContent);

            // console.log(i);
        });
    i += 1
}
*/