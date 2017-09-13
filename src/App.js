import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary';
import About from './components/About';
import BasicInfo from './components/BasicInfo';
import List from './components/List';
import SocialMedia from './components/SocialMedia';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "welcome",
      url: 'http://localhost:8080',
      currentAthleteId: null
    }
  }

  setDisplay(newValue) {
    this.setState({
      display: newValue
    })
  }

  updateAthlete(id) {
    this.setState({
      currentAthleteId: id
    })
  }

  render() {
    let displayElement;
    
    if (this.state.display === "welcome") {
      displayElement = 
        <Welcome
          setDisplay={this.setDisplay.bind(this)}
        />
    } else if (this.state.display === "basic") {
      displayElement =
        <BasicInfo
          setDisplay={this.setDisplay.bind(this)}
          url={this.state.url}
          updateAthlete={this.updateAthlete.bind(this)}
        />
    } else if (this.state.display === "list") {
      displayElement = 
        <List
          setDisplay={this.setDisplay.bind(this)}
        />
    } else if (this.state.display === "social") {
      displayElement = 
        <SocialMedia
          setDisplay={this.setDisplay.bind(this)}
          url={this.state.url}
          currentAthleteId={this.state.currentAthleteId}
        />
    } else if (this.state.display === "about") {
      displayElement = 
      <About
        setDisplay={this.setDisplay.bind(this)}
        url={this.state.url}
        currentAthleteId={this.state.currentAthleteId}
      />
    } else if (this.state.display === "summary") {
      displayElement = 
      <Summary
        setDisplay={this.setDisplay.bind(this)}
      />
    }

    return (
      <div className="App">
        {displayElement}
      </div>
    );
  }
}

export default App;
