import React from 'react';

const FollowerCard = (props) => {
	return (
		<div className="followerCard">
			<h1>Login: {props.user.login}</h1>
			<img src={props.user.avatar_url} alt="User Profile Image" />
			<a href={props.user.url}>Profile</a>
		</div>
	);
};

export default FollowerCard;
