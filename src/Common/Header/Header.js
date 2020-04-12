import React, {Component} from 'react';
import netflixLogo from '../../images/netflixLogo.png';
import {MdSearch} from 'react-icons/md';
import {GiPresent} from 'react-icons/gi'
import {MdNotifications} from 'react-icons/md'
import {TiArrowSortedDown} from 'react-icons/ti'
import myLogo from '../../images/me.png';
import './Header.scss'


export default class Header extends Component {
  render() {
    return (
      <div className="Header">

        <div className="left-menu-wrapper">
          <img src={netflixLogo} className="logo"/>
          <div className="home">홈</div>
          <div className="tv-program">TV프로그램</div>
          <div className="movie">영화</div>
          <div className="newest-contents">최신 콘텐츠</div>
          <div className="my-contents">내가 찜한 콘텐츠</div>
        </div>

        <div className="right-menu-wrapper">
          <div className="search"><MdSearch size="24"/></div>
          <div className="kidz">키즈</div>
          <div className="present"><GiPresent size="24"/></div>
          <div className="notice"><MdNotifications size="24"/></div>
          <div className="setting-nav-bar">
            <img src={myLogo}/>
            <TiArrowSortedDown size="24"/>
          </div>
        </div>

      </div>
    );
  }
}
