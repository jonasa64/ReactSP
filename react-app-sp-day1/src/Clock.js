import React, { Component } from 'react';

class Clock extends React.Component {
  
    constructor(props) {
      super(props);
     // let message =  'Check our cool React driven timer ;-';
      this.state = {message: ''};
      this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
          this.newString();

          console.log("I am the componentDidMount");
    
        }
  
    componentWillUnmount() {
        clearInterval(this.timerID);

        console.log("I am the  componentWillUnmount")
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
      newString = () => {
        this.setState({
          message: 'Check our cool React driven timer '
        });
      }
  
    render() {
        console.log("render");
     
      return (
        <div>
          <h1>{this.state.message}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;


    