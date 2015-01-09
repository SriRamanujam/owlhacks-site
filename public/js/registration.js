        var RegistrationBox = React.createClass({displayName: 'RegistrationBox',
          render: function() {
            return (

              <div className="registrationBox">
              <RegistrationForm />
              <RegistrationFormSubmitButton />
              </div>
              );
          }
        });


        var RegistrationForm = React.createClass({
          render: function() {
            return (
              <form className="registrationForm">
              <RegistrationItem value = "First Name" name = "first-name" type = "text" />
              <RegistrationItem value = "Last Name" name = "last-name" type = "text" />
              <RegistrationItem value = "Email Address" name = "email-address" type = "text" />
              <RegistrationItem value = "School" name = "school" type = "text" />
              <RegistrationItem value = "Shirt Size" name = "shirt-size" type = "radio" />
              <RegistrationItem value = "Food Restrictions" name = "food-restrictions" type = "text" />
              <RegistrationItem value = "First Hackathon?" name = "first-hackathon" type = "radio" />
              <RegistrationItem value = "Why Owlhacks?" name = "why-owlhacks" type = "text" />
              <RegistrationItem value = "Hardware Hack?" name = "hw-hack" type = "radio" />
              <RegistrationItem value = "Teammate Names?" name = "teammate-names" type = "text" />
              <RegistrationItem value = "Resume" name = "resume" type = "file" />
              <RegistrationItem value = "Github Username" name = "github-username" type = "text" />
              <RegistrationItem value = "LinkedIn Address" name = "linkedin-address" type = "text" />
              <RegistrationItem value = "Twitter Handle" name = "twitter-handle" type = "text" />
              <RegistrationItem value = "Personal Website" name = "personal-website" type = "text" />

              </form>
              );
          }
        });

        var RegistrationFormSubmitButton = React.createClass({
          render: function() {
            return (
              <div className="registrationFormSubmitButton"></div>
              );
          }
        });


        var RegistrationItem = React.createClass({
          render: function() {
            return (<input type={this.props.type} placeholder={this.props.value} value="" />
             );
          }
        });

        React.render(
          React.createElement(RegistrationBox, null),
          document.getElementById('content')
          );