import React, { Component } from 'react';
//import ListDemo from './ListDemo';




/*

class Cars extends Component {
constructor(){
    super();
  
    this.state = {
        cars: [
            {"id": "1","make": "VW", "model": "Golf", "year": "1948"},
            {id: 2,make: "VW", model: "Golf", year: 1988},
      {id: 3,make: "Opel", model: "Corsa", year: 1998},
      {id: 4,make: "Opel", model: "Kadett", year: 1978},
      {id: 5,make: "Opel", model: "Kadett", year: 1991},
      {id: 6,make: "VW", model: "UP", year: 2008},
      {id: 7,make: "Opel", model: "Corsa", year: 2011},
      {id: 8,make: "Saab", model:"Sonett", year: 1965},
        ],
    }
}

/*
getAllCars = (props) => {
const {cars} = props;
var rows = cars.map(c=>{
    <tr><td>{c.make}</td><td>{c.model}</td><td>{c.year}</td></tr>
})

}*//*

  render() {
    return (
<div>
<table className="table">
        <thead>
          <tr><th>id</th><th>Make</th><th>model</th><th>year</th></tr>
 
        </thead>
        <tbody>
        {this.state.cars.map((car, i) => <CarsRow key = {i} 
                     cars = {car} />)}
        </tbody>
      </table>

      </div>
    );
  }
}


class CarsRow extends Component{
    render(){
        return(
            <tr>
           <td>{this.props.id}</td>
            <td>{this.props.make}</td>
            <td>{this.props.model}</td>
            <td>{this.props.year}</td>
            </tr>
        );
    }

}
*/


class Cars extends React.Component {
    constructor() {
       super();
       this.state = {
          data: 
          [
             {
                "id":1,
                "make":"VW",
                "model":"Golf",
                "year":"1948"
             },
             {
                "id":2,
                "make":"Opel",
                "model":"Corsa",
                "year":"1998"
             },
             {
                "id":3,
                "make":"Saab",
                "model":"Sonett",
                "year":"1965"
             }
          ]
       }
    }
    render() {
       return (
          <div>
             <Header/>
             <table>
                <tbody>
                   {this.state.data.map((car, i) => <TableRow key = {i} 
                      data = {car} />)}
                </tbody>
             </table>
          </div>
       );
    }
 }
 class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>Cars</h1>
          </div>
       );
    }
 }
 class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.make}</td>
             <td>{this.props.data.model}</td>
             <td>{this.props.data.year}</td>
          </tr>
       );
    }
 }



export default Cars;