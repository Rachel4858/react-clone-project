import React, {Component} from 'react';
import './ClassifiedContentsList.scss';
import * as Data from './classifiedContentsMockData';
import ClassifiedContentsItem from "../../../Components/MainPage/ClassifiedContentsList/ClassifiedContentsItem";


export default class ClassifiedContentsList extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: Data.classifiedContentsList
    })
  }

  render() {
    const {data} = this.state;

    return (
      <div className="ClassifiedContentsList">
        <div className="contents-title">영지버섯 님이 시청 중인 콘텐츠</div>

        <div className="contents-item-wrapper">
          {data.map((item) => (
            <div className="item" key={item.id}><ClassifiedContentsItem item={item} key={item.id}/>
            </div>
          ))}
        </div>


      </div>
    );
  }
}
