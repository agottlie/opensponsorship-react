import React, { Component } from 'react';

class Welcome extends Component {
	handleClick() {
		this.props.setDisplay("basic");
	}

	render() {
		return (
			<div>
				<h1>Welcome to OpenSponsorship</h1>
				<button
					onClick={(e) => {this.handleClick()}}
				>
					Create Profile
				</button>
			</div>
		);
	}
}

export default Welcome;