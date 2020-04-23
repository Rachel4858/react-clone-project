import React, {Component} from 'react';
import { Link } from "react-router-dom"
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
          <Link to="/" style={{ textDecoration: 'none', color : "#ffffff"}}><div className="menu">홈</div></Link>
          <Link to="/tv" style={{ textDecoration: 'none', color : "#ffffff"}}><div className="menu">TV프로그램</div></Link>
          <Link to="/movie" style={{ textDecoration: 'none', color : "#ffffff"}}><div className="menu">영화</div></Link>
          <div className="menu">최신 콘텐츠</div>
          <div className="menu">내가 찜한 콘텐츠</div>
        </div>

        <div className="right-menu-wrapper">
          <Link to="/search" style={{ textDecoration: 'none', color : "#ffffff"}}><div className="menu"><MdSearch size="24"/></div></Link>
          <div className="menu">키즈</div>
          <div className="menu"><GiPresent size="24"/></div>
          <div className="menu"><MdNotifications size="24"/></div>
          <div className="setting-nav-bar">
            <img src={myLogo}/>
            <TiArrowSortedDown size="24" className="menu"/>
          </div>
        </div>

      </div>
    );
  }
}
