import React from 'react';
import '../../App.css';

class Login extends React.Component {
	generateRandomString = (length) => {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	handleLogin = (e) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		var redirect_uri = 'http://localhost:3000/';

		var state = this.generateRandomString(16);

		localStorage.setItem(stateKey, state);
		var scope = 'user-read-private user-read-email';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	};

	render() {
		return (
			<div className="login-container">
				<h1 size="title">Login Sekarang!</h1>
				<div onClick={this.handleLogin} className="button">
                    <button>Klik disini untuk Login</button>	
				</div>
			</div>
		);
	}
}

export default Login;
