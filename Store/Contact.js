export default {
    'links': {
        'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
        'dropdown': [ 'Project1', 'Project2', 'Project3' ]
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
};