import React, { Component } from 'react';
import axios from 'axios';

class BasicInfo extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      inputs: {
	        name: "",
	        dateOfBirth: "",
	        nationality: "",
	        location:"",
	        gender: "",
	        id: this.props.currentAthleteId
	      }
	    }
	}

	changeInput(e, input){
	    const val = e.target.value;
	    this.setState(prev => {
	      prev.inputs[input] = val;
	      return prev;
	    });
	 }

	handleSubmit(e) {
		e.preventDefault();
		if (this.props.edit) {
			axios.put(`${this.props.url}/basic`, this.state.inputs)
				.then(res => {
					this.props.updateAthlete(res.data.id);
					this.props.setDisplay("summary");
				})
		} else {
			axios.post(`${this.props.url}/basic`, this.state.inputs)
				.then(res => {
					this.props.updateAthlete(res.data.id);
					this.props.setDisplay("about");
				})
		}

	}

	render() {
		return (
			<div>
				<h1>Basic Info - Stage 1 of 4</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name:
                        <input type="text"
                        	name="name"
                        	value={this.state.inputs.name}
                        	onChange={e => this.changeInput(e, 'name')}
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input type="text"
                        	name="dateOfBirth"
                        	value={this.state.inputs.dateOfBirth}
                        	onChange={e => this.changeInput(e, 'dateOfBirth')}
                        />
                    </label>
                    <label>
                        Nationality:
                        <input type="text"
                        	name="nationality"
                        	value={this.state.inputs.nationality}
                        	onChange={e => this.changeInput(e, 'nationality')}
                        />
                    </label>
                    <label>
                        Location:
                        <input type="text"
                        	name="location"
                        	value={this.state.inputs.location}
                        	onChange={e => this.changeInput(e, 'location')}
                        />
                    </label>
                    <label>
                        Gender:
                        <input type="text"
                        	name="gender"
                        	value={this.state.inputs.gender}
                        	onChange={e => this.changeInput(e, 'gender')}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
			</div>
		);
	}
}

export default BasicInfo;