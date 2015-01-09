        var RegistrationBox = React.createClass({displayName: 'RegistrationBox',
          render: function() {
            return (

              <div className="registrationBox">
              <h1>Registration</h1>
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
              /*<RegistrationItem name = "First Name" type = "text">This is one RegistrationItem</RegistrationItem>
              <RegistrationItem name = "Last Name" type = "text">This is another RegistrationItem</RegistrationItem>*/
              </form>
              );
          }
        });

        var RegistrationFormSubmitButton = React.createClass({
          render: function() {
            return (
              <div className="registrationFormSubmitButton">
              Hello, I am a RegistrationFormSubmitButton.
              </div>
              );
          }
        });

/*
        var RegistrationItem = React.createClass({
          render: function(){
            if(this.props.type === "text"){
              return(
                <input class="form-input" placeholder= this.props.name type=this.props.type size="25" value="" required>
                );
            }
            
          }
        });
*/
        React.render(
          React.createElement(RegistrationBox, null),
          document.getElementById('content')
          );