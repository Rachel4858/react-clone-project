import React, {Component} from 'react';
import './Mainpage.scss'
import ClassifiedContentsList from "../../Containers/MainPage/ClassifiedContentsList/ClassifiedContentsList";

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
       <ClassifiedContentsList/>
      </div>
    );
  }
}
