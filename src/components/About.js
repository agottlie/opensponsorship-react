import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      inputs: {
	        sport: "",
	        team: "",
	        association: "",
	        interests:"",
	        charities: "",
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
		axios.put(`${this.props.url}/about`, this.state.inputs)
			.then(
				this.props.setDisplay("social")
			)
	}

	render() {
        return (
			<div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Sport:
                        <select type="text"
                        	name="sport"
                        	value={this.state.inputs.sport}
                        	onChange={e => this.changeInput(e, 'sport')}
                        >
                            <option value="Golf">Golf</option>
                            <option value="Baseball">Baseball</option>
                        </select>

                    </label>
                    <label>
                        Team:
                        <input type="text"
                        	name="team"
                        	value={this.state.inputs.team}
                        	onChange={e => this.changeInput(e, 'team')}
                        />
                    </label>
                    <label>
                        Association
                        <input type="text"
                        	name="association"
                        	value={this.state.inputs.association}
                        	onChange={e => this.changeInput(e, 'association')}
                        />
                    </label>
                    <label>
                        Interests:
                        <input type="text"
                        	name="interests"
                        	value={this.state.inputs.interests}
                        	onChange={e => this.changeInput(e, 'interests')}
                        />
                    </label>
                    <label>
                        Charities:
                        <input type="text"
                        	name="charities"
                        	value={this.state.inputs.charities}
                        	onChange={e => this.changeInput(e, 'charities')}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
			</div>
		);
	}
}

export default About;