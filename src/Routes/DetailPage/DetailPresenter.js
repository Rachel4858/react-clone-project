import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Loading = styled.div`
  padding-left:50px`;


const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  // margin-bottom:50px;

`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity:0.5;
  z-index:0
`;

const Content = styled.div`
  display:flex;
  width: 100%;
  position:relative;
  z-index:1;
  height:100%;
`;

const Cover = styled.div`
  width:30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius:5px;

  `;

const Date = styled.div`
  width:70%;
  margin-left:10px;
`;

const Title = styled.h3`
  font-size:32px;
  margin-bottom:10px;

  `;

const ItemContainer = styled.div`
  margin:20px 0;
  `;

const Item = styled.span``;

const Divider = styled.span`
  margin:0 10px`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height:1.5;
  width:50%;
  `;

const DetailPresenter = ({isLoading, result, error, videoData}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoData.videoKey}`;

  return (
    <>
      {isLoading ? <Loading>DetailPage 로딩중 입니다...</Loading> : (

        <Container>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
            <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../images/noPosterSmall.png")}
            />
            <Date>
              <Title>{
                result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider> / </Divider>
                <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                <Divider> / </Divider>
                <Item>
                  {result.genres && result.genres.map((genre, idx) => idx === result.genres.length - 1 ? genre.name : `${genre.name}, `)}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <ReactPlayer url={videoUrl} playing controls/>
            </Date>
          </Content>

        </Container>
      )}
    </>)
};

export default DetailPresenter