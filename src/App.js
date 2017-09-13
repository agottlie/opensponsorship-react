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
      url: 'https://open-sponsorship.herokuapp.com',
      currentAthleteId: null,
      facebook: "",
      twitter: "",
      instagram: "",
      youtube: "",
      snapchat: "",
      edit: false
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

  updateSocial(fb,tw,ig,yt,sn) {
    this.setState({
      facebook: fb,
      twitter: tw,
      instagram: ig,
      youtube: yt,
      snapchat: sn
    })
  }

  setEdit(value) {
    this.setState({
      edit: value
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
          edit={this.state.edit}
          currentAthleteId={this.state.currentAthleteId}
        />
    } else if (this.state.display === "list") {
      displayElement = 
        <List
          setDisplay={this.setDisplay.bind(this)}
          url={this.state.url}
        />
    } else if (this.state.display === "social") {
      displayElement = 
        <SocialMedia
          setDisplay={this.setDisplay.bind(this)}
          url={this.state.url}
          currentAthleteId={this.state.currentAthleteId}
          updateSocial={this.updateSocial.bind(this)}
        />
    } else if (this.state.display === "about") {
      displayElement = 
      <About
        setDisplay={this.setDisplay.bind(this)}
        url={this.state.url}
        currentAthleteId={this.state.currentAthleteId}
        edit={this.state.edit}
      />
    } else if (this.state.display === "summary") {
      displayElement = 
      <Summary
        setDisplay={this.setDisplay.bind(this)}
        url={this.state.url}
        currentAthleteId={this.state.currentAthleteId}
        facebook={this.state.facebook}
        twitter={this.state.twitter}
        instagram={this.state.instagram}
        youtube={this.state.youtube}
        snapchat={this.state.snapchat}
        setEdit={this.setEdit.bind(this)}
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
