import React, {Component} from 'react';
export default class AllJokes extends React.Component { //YELLOW
    constructor(props) {
      super(props);
    }
    render() {
      const lis = this.props.jokes.map((j, i) => (<li key={i}>{j}</li>))
      return (
        <ul>
          {lis}
        </ul>
      );
    }
  }

 // export default AllJokes;