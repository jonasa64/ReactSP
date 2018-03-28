import React, { Component } from 'react';
import AllJokes from './AllJokes';
import AddJoke from './AddJoke';
import JokeStore from './JokeStore';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: props.JokeStore.jokes };
  }

  saveJoke = (joke) => {
    this.props.JokesStore.addJoke(joke);
    this.setState({ jokes: this.props.JokesStore.jokes })
  }
//<p>Random Joke: { this.props.JokeStore.getRandomJoke() }</p>
  render() {
    return (
      <div className="App">
       
      <p>Add Joke</p>
      <AddJoke saveJoke={this.saveJoke} />
      <br/>
      <p>All Jokes</p>
      <AllJokes jokes={this.state.jokes} />

      </div>
    );
  }
}
export default App;
