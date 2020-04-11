import React, {Component} from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <MainPage/>

        <Footer/>
      </div>
    );
  }
}
