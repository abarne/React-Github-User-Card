import React from 'react';

const UserCard = (props) => {
	return (
		<div className="userCard">
			<h1>{props.user.name}</h1>
			<img src={props.user.avatar_url} alt="User Profile Image" />
			<h3>{props.user.bio}</h3>
			<h3>Followers: {props.user.followers}</h3>
			<h3>Following: {props.user.following}</h3>
			<h3>Repositories: {props.user.public_repos}</h3>
			<a href={props.user.url}>Profile</a>
		</div>
	);
};

export default UserCard;
