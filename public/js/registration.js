        var RegistrationBox = React.createClass({displayName: 'RegistrationBox',
          render: function() {
            return (

              <div className="registrationBox">
              <RegistrationFormOne />
              </div>
              );
          }
        });
        


        var RegistrationFormOne = React.createClass({
          render: function() {
            return (
              <form className="registrationFormOne">
              <div>
              <RegistrationItem value = "First Name" name = "first-name" type = "text" />
              <RegistrationItem value = "Last Name" name = "last-name" type = "text" />
              </div>
              <div>
              <RegistrationItem value = "Email Address" name = "email-address" type = "text" />
              <RegistrationItem value = "School" name = "school" type = "text" />
              </div>
              </form>
              );
          }
        });

        var RegistrationFormTwo = React.createClass({
          render: function() {
            return (
              <form className="registrationFormTwo">
              <RegistrationItem value = "Shirt Size" name = "shirt-size" type = "radio" />
              <RegistrationItem value = "Food Restrictions" name = "food-restrictions" type = "text" />
              <RegistrationItem value = "First Hackathon?" name = "first-hackathon" type = "radio" />
              <RegistrationItem value = "Why Owlhacks?" name = "why-owlhacks" type = "text" />
              <RegistrationItem value = "Hardware Hack?" name = "hw-hack" type = "radio" />
              <RegistrationItem value = "Teammate Names?" name = "teammate-names" type = "text" />
              </form>
              );
          }
        });

        var RegistrationFormThree = React.createClass({
          render: function() {
            return (
              <form className="registrationFormThree">
              <RegistrationItem value = "Resume" name = "resume" type = "file" />
              <RegistrationItem value = "Github Username" name = "github-username" type = "text" />
              <RegistrationItem value = "LinkedIn Address" name = "linkedin-address" type = "text" />
              <RegistrationItem value = "Twitter Handle" name = "twitter-handle" type = "text" />
              <RegistrationItem value = "Personal Website" name = "personal-website" type = "text" />
              </form>
              );
          }
        });


        var RegistrationItem = React.createClass({
          render: function() {

            if(this.props.name === "shirt-size"){
              return (
                <div>
                <h2>Shirt Size</h2>
                <input type={this.props.type} name ={this.props.name} value="Large" />
                <input type={this.props.type} name ={this.props.name} value="Medium" />
                <input type={this.props.type} name ={this.props.name} value="Small" />
                </div>
                );
            }

            else if(this.props.name === "first-hackathon"){
              return (
                <div>
                <h2>First Hackathon?</h2>
                <input type={this.props.type} name ={this.props.name} value="Yes" />
                <input type={this.props.type} name ={this.props.name} value="No" />
                </div>
                );
            }

            else if(this.props.name === "hw-hack"){
              return (
                <div>
                <h2>Hardware Hack?</h2>
                <input type={this.props.type} name ={this.props.name} value="Yes" />
                <input type={this.props.type} name ={this.props.name} value="No" />
                </div>
                );
            }

            return (<input type={this.props.type} placeholder={this.props.value} name = {this.props.name} value="" />
             );
          }
        });

        React.render(
          React.createElement(RegistrationBox, null),
          document.getElementById('content')
          );