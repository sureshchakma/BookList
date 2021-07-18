import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';



class App extends Component {
    state = {
      books: [
        {bookName: '1984', writer: 'George Orwel'},
        {bookName: 'The Alchemist', writer: 'Paulo Koelho'},
        {bookName: 'Leadership', writer: 'John C Maxwel'}
      ],
      otherProp: 'I am some other props'
    };
    changeBookState = newBook =>{
      this.setState({
        books: [
          {bookName: newBook, writer: 'George Orwel'},
          {bookName: 'The Alchemist', writer: 'Paulo Koelho'},
          {bookName: 'Rich Dad Poor Dad', writer: 'Robert T Ciosaki'}
        ]
      });
    }
    changeWithInputState = event => {
      this.setState({
        books: [
          {bookName: event.target.value, writer: 'George Orwel'},
          {bookName: 'The Alchemist', writer: 'Paulo Koelho'},
          {bookName: 'Rich Dad Poor Dad', writer: 'Robert T Ciosaki'}
        ]
      });
    }
  render(){
    const style = {
      border: "0.1px solid red",
      borderRadius: "5px",
      backgroundColor: "hotpink",
      color: "black"
    }
    console.log(this.state);
    return(
      <div className ="App">
      <h1 style={style} >Book List</h1>
      <button onClick ={()=> this.changeBookState('19 eighty four')} >Change State</button>
      <input type ="text" onChange={this.changeWithInputState} />
      <Book 
      bookName = {this.state.books[0].bookName} 
      writer= {this.state.books[0].writer} 
      inputName ={this.changeWithInputState} />
      <Book 
      bookName = {this.state.books[1].bookName} 
      writer={this.state.books[1].writer} />
      <Book 
      bookName = {this.state.books[2].bookName} 
      writer= {this.state.books[2].writer}
      change ={this.changeBookState.bind(this, 'Ninetheen eighty four')} />
    </div>
    );
  }
}

 export default App;
