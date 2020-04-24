import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from '../../Components/Section'
import Item from "../../Components/Item";



const Container = styled.div`
  padding:10px 50px;
  `;

const MoviePresenter = (props) => {
  const {nowPlaying, popular, upcoming} = props;

  return (
    <>
      <Container>
        {nowPlaying.isLoading ? (<div> nowPlaying 로딩중입니다..</div>) :
          <Section title="NowPlaying Movies">
            {nowPlaying.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_title}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.release_date && item.release_date.substring(0, 4)}
                     isTV={false}
              />)
            )}</Section>}

        {popular.isLoading ? (<div> popular 로딩중입니다..</div>) :
          <Section title="Popular Movies">
            {popular.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_title}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.release_date && item.release_date.substring(0, 4)}
                     isTV={false}

              />)
            )}</Section>}

        {upcoming.isLoading ? (<div> upcoming 로딩중입니다..</div>) :
          <Section title="UpComing Movies">
            {upcoming.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_title}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.release_date && item.release_date.substring(0, 4)}
                     isTV={false}

              />)
            )}</Section>}
      </Container>
    </>
  )
};

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.object.isRequired,
  popular: PropTypes.object.isRequired,
  upcoming: PropTypes.object.isRequired
};

export default MoviePresenter