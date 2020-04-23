import React, {Component} from 'react';
import './App.css';
import Router from '../src/Common/Router'
import GlobalStyles from "../src/Common/GlobalStyles"

export default class App extends Component {
  render() {
    return (
      <>
        <Router/>
        <GlobalStyles/>
        </>
    );
  }
}
