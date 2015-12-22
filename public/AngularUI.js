var Email = React.createClass({
		render: function() {
			return (
			     <div>
					<label htmlFor="RegistrationForm_email" >{this.props.caption}</label>
					<input type="email" id="RegistrationForm_email" required />
				</div>
			);
		}

	});
	
var Name = React.createClass({
		render: function() {
			return (
			     <div>
					<label htmlFor="RegistrationForm_name" >{this.props.caption}</label>
					<input type="text" id="RegistrationForm_name" required />
				</div>
			);
		}

	});
	
	var Password = React.createClass({
		render: function() {
			return (
			<div>
				<label htmlFor="RegistrationForm_password" >{this.props.caption}</label>
				<input type="password" id="RegistrationForm_password" required/>
			</div>
			);
		}

	});
	
	var Button = React.createClass({
		render: function() {
			return (
			<div>
				<input type="submit" id="RegistrationForm_submit" value = {this.props.caption} />
			</div>
			);
		}

	});
	
	var LoginForm = React.createClass({
		render: function() {
			return (
			<form method = "post" action = "">
			<Email caption = {this.props.EmailCaption}/>
			<Password caption = {this.props.PasswordCaption}/>
			<Button caption = {this.props.ButtonCaption}/>
			</form>
			);
			
		}

	});
	
	var RegisterForm = React.createClass({
		render: function() {
			return (
			<form method = "post" action = "">
			<Name caption = {this.props.NameCaption}/>
			<Name caption = {this.props.SurnameCaption}/>
			<Email caption = {this.props.EmailCaption}/>
			<Password caption = {this.props.PasswordCaption}/>
			<Password caption = {this.props.RepeatPasswordCaption}/>
			<Button caption = {this.props.ButtonCaption}/>
			</form>
			);
			
		}

	});
