import React, {Component} from 'react';
import './ClassifiedContentsList.scss';
import * as Data from './classifiedContentsMockData';
import ClassifiedContentsItem from "../../../Components/MainPage/ClassifiedContentsList/ClassifiedContentsItem";
import {tvApi} from '../../../api'


export default class ClassifiedContentsList extends Component {

  state = {
    popular:[],
    error: null,
    loading: true

  };

  async componentDidMount() {
    try {
      const {data: {results: popular}} = await tvApi.popular();
      this.setState({
        popular: popular
      })
      console.log(this.state.popular)
    } catch {
      this.setState({
        error: "Can't find movies information."
      })
    } finally {
      this.setState({loading: false});
    }

  }

  render() {
    const {popular, error, loading} = this.state;

    return (
      <div className="ClassifiedContentsList">
        <div className="contents-title">콘텐츠 제목 :</div>

        <div className="contents-item-wrapper">
          {popular.map((item) => (
            <div className="item" key={item.id}><ClassifiedContentsItem item={item} key={item.id}/>
            </div>
          ))}
        </div>


      </div>
    );
  }
}
