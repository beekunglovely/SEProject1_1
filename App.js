import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header /><Login/>
        
      <Footer />
      </div>
      
      
    );
  }
}

export default App;
