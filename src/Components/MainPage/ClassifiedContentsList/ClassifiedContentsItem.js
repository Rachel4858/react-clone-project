import React, {Component} from 'react';
import './ClassifiedContentsItem.scss';


export default class ClassifiedContentsItem extends Component {

  componentDidMount() {
    console.log(this.props.item)
  }

  render() {
    const {item} = this.props;

    return (
      <div className="ClassifiedContentsItem">
        <img src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}/>
        <div className="title">{item.original_name}</div>
      </div>
    );
  }
}
