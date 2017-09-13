import React, { Component } from 'react';
import axios from 'axios';

class SocialMedia extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      inputs: {
	        facebook: "",
            twitter: "",
            instagram: "",
            youtube: "",
            snapchat: "",
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
		axios.put(`${this.props.url}/social`, this.state.inputs)
			.then(
				this.props.setDisplay("summary")
			)
	}

	render() {
        return (
			<div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Facebook:
                        <input type="text"
                        	name="facebook"
                        	value={this.state.inputs.facebook}
                        	onChange={e => this.changeInput(e, 'facebook')}
                        />
                    </label>
                    <label>
                        Twitter:
                        <input type="text"
                        	name="twitter"
                        	value={this.state.inputs.twitter}
                        	onChange={e => this.changeInput(e, 'twitter')}
                        />
                    </label>
                    <label>
                        Instagram
                        <input type="text"
                        	name="instagram"
                        	value={this.state.inputs.instagram}
                        	onChange={e => this.changeInput(e, 'instagram')}
                        />
                    </label>
                    <label>
                        Youtube:
                        <input type="text"
                        	name="youtube"
                        	value={this.state.inputs.youtube}
                        	onChange={e => this.changeInput(e, 'youtube')}
                        />
                    </label>
                    <label>
                        Snapchat:
                        <input type="text"
                        	name="snapchat"
                        	value={this.state.inputs.snapchat}
                        	onChange={e => this.changeInput(e, 'snapchat')}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
			</div>
		);
	}
}

export default SocialMedia;