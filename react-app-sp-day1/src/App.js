import React, { Component } from 'react';
import upper from "./daraStore1";
import {text1, text2, text3} from "./daraStore1";
import person from './dataStore2';



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("please uppercase me")}</p>
        <p>firstname is {person.firstName} and email is {person.email}</p>
        
      </div>
    );
  }
}

export default App;
