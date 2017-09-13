import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
            athletes: []
	    }
	}

    componentDidMount() {
        this.getAllAthletes()
    }

    getAllAthletes() {
        axios.get(`${this.props.url}/`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    athletes: res.data
                })
            })
    }

    renderAthletes() {
    	return this.state.athletes.map((el,index) => {
    		return (
				<div key={index}>
					<h3> {el.name} </h3>
				</div> 
    		)
    	})
    }

	render() {
		return (
			<div>
				<h1>List of All Athletes</h1>
				{this.renderAthletes()}
				<button
                    onClick={(e) => {
                        this.props.setDisplay("welcome");
                    }}
                >
                   	Create New Profile
                </button>
			</div>
		);
	}
}

export default List;