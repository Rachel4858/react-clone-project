import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaStar } from 'react-icons/fa'
import {Link} from "react-router-dom";

const Container = styled.div`
  font-size:12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size:cover;
  background-position:center center;
  height:180px;
  border-radius:4px;
  transition:opacity 0.1s linear;
  `;

const Rating = styled.div`
  bottom: 5px;
  right: 5px;
  position:absolute;
  opacity:0;
  `;

const ImageContainer = styled.div`  
  margin-bottom:5px;
  position:relative;
  &:hover {
    ${Image} {
      opacity:0.3;
    }
    ${Rating} {
      opacity:1;
  }`;

const Title = styled.div`
  display:block;
  margin-bottom: 3px;`;

const Year = styled.div`
      font-size:10px;
    color:rgba(255, 255, 255, 0.5);
    `;

const Item = ({id, title, rating, imageUrl, year, isTV}) => (
  <Link to={isTV ? `/tv/${id}` : `/movie/${id}`} style={{ textDecoration: 'none', color : "#ffffff"}}>
  <Container>
    <ImageContainer>
      <Image
        bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require("../../src/images/noPosterSmall.png")}/>
      <Rating><FaStar/> {rating}/10</Rating>
    </ImageContainer>
    <Title>{title}</Title>
    <Year>{year}</Year>
  </Container>
  </Link>
);

Item.propTypes = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  rating:PropTypes.number,
  imageUrl:PropTypes.string,
  year:PropTypes.string
};

export default Item