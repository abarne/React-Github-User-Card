import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			follower: []
		};
	}

	componentDidMount() {
		axios.get(`https://api.github.com/users/abarne`).then((response) => {
			this.setState({ user: response.data });
			console.log(this.state.user);
		});
		axios.get(`https://api.github.com/users/abarne/followers`).then((res) => {
			// this.setState({follower: res.data})
			console.log('follower data', res);
			this.setState({ follower: res.data });
			console.log('follower state', this.state.follower);
		});
	}

	render() {
		return (
			<div className="App">
				<div className="mainUser">
					<UserCard user={this.state.user} />
				</div>
				<h1 className="myFollowers">My Followers</h1>
				<div className="followerCards">{this.state.follower.map((item) => <FollowerCard user={item} />)}</div>
			</div>
		);
	}
}

export default App;
