import React, {Component} from 'react'
import {FaFacebookSquare} from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div className="footer-wrapper">
          <div className="logo-wrapper">
            <FaFacebookSquare size="30px" className="logo"/>
            <TiSocialInstagram size="30px" className="logo"/>
            <FaTwitter size="30px" className="logo"/>
            <FaYoutube size="30px" className="logo"/>
          </div>

          <div className="detail-wrapper">
            <div className="detail-list">
              <div className="detail-item">자막 및 음성</div>
              <div className="detail-item">미디어 센터</div>
              <div className="detail-item">개인정보</div>
              <div className="detail-item">문의하기</div>
            </div>
            <div className="detail-list">
              <div className="detail-item">음성 지원</div>
              <div className="detail-item">투자 정보(IR)</div>
              <div className="detail-item">법적 고지</div>
            </div>
            <div className="detail-list">
              <div className="detail-item">고객 센터</div>
              <div className="detail-item">입사 정보</div>
              <div className="detail-item">쿠키 설정</div>
            </div>
            <div className="detail-list">
              <div className="detail-item">기프트카드</div>
              <div className="detail-item">이용 약관</div>
              <div className="detail-item">회사 정보</div>
            </div>
          </div>

          <div className="service-code">서비스 코드</div>

          <div className="address-text-wrapper">
            <div className="address-text">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호:</div>
            <div className="address-text">대표: 레지널드 숀 톰프슨</div>
            <div className="address-text">이메일 주소: korea@netflix.com</div>
            <div className="address-text">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
            <div className="address-text">클라우드 호스팅: Amazon Web Services Inc.</div>
            <div className="address-text">공정거래위원회 웹사이트 링크</div>
            <div className="address-text">i-06db45d2f4485e5d7</div>
          </div>

        </div>
      </div>
    );
  }
}
