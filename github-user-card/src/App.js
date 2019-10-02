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
			follower: [],
			search: ''
		};
	}

	handleChanges = (e) => {
		this.setState({
			search: e.target.value
		});
	};

	componentDidMount() {
		axios.get(`https://api.github.com/users/abarne`).then((response) => {
			this.setState({ user: response.data });
			// console.log(this.state.user);
		});
		axios.get(`https://api.github.com/users/abarne/followers`).then((res) => {
			// this.setState({follower: res.data})
			console.log('follower data', res);
			this.setState({ follower: res.data });
			// console.log('follower state', this.state.follower);
		});
	}

	clearFollowers = (e) => {
		e.preventDefault();
		this.setState({ follower: [] });
		this.fetchUsers(e);
	};

	fetchUsers = (e) => {
		e.preventDefault();
		axios.get(`https://api.github.com/users/abarne/followers`).then((res) => {
			// this.setState({ follower: res.data });
			res.data.map((item) => {
				// item.login === this.state.search
				if (item.login.includes(this.state.search)) {
					console.log(item);

					this.setState({ follower: [ ...this.state.follower, item ] });
					console.log(this.state.follower);
				}
			});
		});
	};

	// componentDidUpdate(prevProps, prevState){
	// 	if(this.state.follower !== prevState.follower){}
	// }

	render() {
		return (
			<div className="App">
				<div className="mainUser">
					<UserCard user={this.state.user} />
				</div>
				<h1 className="myFollowers">My Followers</h1>
				<div className="search">
					<input type="text" value={this.state.search} onChange={this.handleChanges} />
					<button onClick={this.clearFollowers}>Search Followers</button>
				</div>
				<div className="followerCards">{this.state.follower.map((item) => <FollowerCard user={item} />)}</div>
			</div>
		);
	}
}

export default App;
