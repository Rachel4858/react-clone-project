import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomeContainer from "../Routes/HomePage/HomeContainer";
import TVContainer from "../Routes/TVPage/TVContainer";
import MovieContainer from "../Routes/MoviePage/MovieContainer";
import SearchContainer from "../Routes/SearchPage/SearchContainer";
import DetailContainer from "../Routes/DetailPage/DetailContainer";

export default () => (
  <Router>
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomeContainer}/>
        <Route path="/tv" exact component={TVContainer}/>
        <Route path="/movie" exact component={MovieContainer}/>
        <Route path="/search" exact component={SearchContainer}/>
        <Route path="/movie/:id" exact component={DetailContainer}/>
        <Route path="/tv/:id" isTVv="true" exact component={DetailContainer}/>
        <Redirect from="*" to="/"/>
      </Switch>
      <Footer/>
    </>
  </Router>
);