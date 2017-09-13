import React, { Component } from 'react';
import axios from 'axios';

class Summary extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
            athlete: {}
	    }
	}

    componentDidMount() {
        this.getAthlete()
    }

    getAthlete() {
        axios.get(`${this.props.url}/${this.props.currentAthleteId}`)
            .then(res => {
                this.setState({
                    athlete: res.data
                })
            })
    }

	renderKeys() {
        let tempAth = this.state.athlete;
        tempAth.facebook = this.props.facebook;
        tempAth.twitter = this.props.twitter;
        tempAth.instagram = this.props.instagram;
        tempAth.youtube = this.props.youtube;
        tempAth.snapchat = this.props.snapchat;
        let arr = Object.keys(tempAth);
        return arr.map((el, index) => {
            return (
                <div key={index}>
                    <h3> {el}: {tempAth[el]} </h3>
                </div>
            )
        })
    }

	render() {
		return (
			<div>
				{this.renderKeys()}
                <button
                    onClick={(e) => {
                        this.props.setEdit(true);
                        this.props.setDisplay("basic");
                    }}
                >
                    Edit Basic Info
                </button>
                <button
                    onClick={(e) => {
                        this.props.setEdit(true);
                        this.props.setDisplay("about");
                    }}
                >
                    Edit About
                </button>
                <button
                >
                    Edit Social Media
                </button>
                <br/>
                <br/>
                <button
                    onClick={(e) => {
                        this.props.setEdit(false);
                        this.props.setDisplay("list");
                    }}
                >
                    Submit
                </button>

			</div>
		);
	}
}

export default Summary;