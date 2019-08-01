import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const store = {
    'home': {
        'title': 'Title Page!'
        'links': {
            'primary': ['Home', 'About', 'Contact', 'Project']
            'dropdown': ['Project 1', 'Project 2', 'Project 3']
        }
        'page': `
        <section>
    <h2>Section 1 Header</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta, reiciendis distinctio, impedit accusantium libero! Iusto mollitia minus ipsam quam laborum!
    </p>
    <a href="#" class="cta-btn">Read More!</a>

</section>

<section>
    <h2>Section 2 Header</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta, reiciendis distinctio, impedit accusantium libero! Iusto mollitia minus ipsam quam laborum!
    </p>
    <a href="#" class="cta-btn">Read More!</a>


</section>

<section>
    <h2>Section 3 Header</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magnam numquam corporis repudiandae porro tempore rerum dolores vitae dicta, reiciendis distinctio, impedit accusantium libero! Iusto mollitia minus ipsam quam laborum!
    </p>
    <a href="#" class="cta-btn">Read More!</a>

</section>


        `
    },
    'about': {
        'title': 'About Page'
        'links': {
            'primary': ['Home', 'About', 'Contact', 'Project']
            'dropdown': ['Project 1', 'Project 2', 'Project 3']
        }
        'page': `
        <h2>Finally, Main Stuff !</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ullam cupiditate, et atque soluta eaque nobis, quasi rerum illum iusto veritatis maiores rem reiciendis quaerat minus velit, hic aspernatur. Reiciendis. </p>
        `
    },
    'contact': {
        'title': 'Contact Page'
        'links': {
            'primary': ['Home', 'About', 'Contact', 'Project']
            'dropdown': ['Project 1', 'Project 2', 'Project 3']
        }
        'page': `
        <!--
        The action attribute defines where on the server the form data should be sent
        The method attribute specifies the HTTP method (GET or POST)
      -->

              <form action="form-responses/new" method="POST">
                  <div class="input-group">

                      <!-- Developer's Note: 'placeholder' without using ` < label > ` is NOT RECOMMENDED for accessibility purposes. -->
                      <input type="text" name="firstname" placeholder="First Name" autofocus />
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

                  <div class="input-group">

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
                      <textarea name="user_message" placeholder="Please provide comments and feedback!" rows="8"
                          cols="40"></textarea>
                      <div>
                          <input type="submit" />
                          <input type="reset" value="Reset">
                      </div>

              </form>

        `
    }
};

function render(state) {
    // functions are invoked to return the results for each
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
`;

    console.log('state came in as ', state);

    // Navigation listeners. Elements will not exist until page is rendered.
    // event handlers are reattached each time page is rendered

    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem) {
        navItem.addEventListener('click',
            function clickHandler(event) {
                event.preventDefault();
                console.log('click function ' + event.target.textContent);
                render(store[event.target.textContent.toLowerCase()]);
                // console.log('hello');
            });
    });
}

render(store.home);


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

// Re-render our page based on what the user clicks in our navigation menu
/*
    1. Capture wat was clicked in navigation - what is the text of the element that was clicked
    2. Access a piece of state based on said text
    3. Show the user the new view (call Render function)

    */