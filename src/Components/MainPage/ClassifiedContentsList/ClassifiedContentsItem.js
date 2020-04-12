import React, {Component} from 'react';
import './ClassifiedContentsItem.scss';


export default class ClassifiedContentsItem extends Component {

  render() {
    const {item} = this.props;

    return (
      <div className="ClassifiedContentsItem">
        <img src={item.imageUrl}/>
      </div>
    );
  }
}
