import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from '../../Common/Section'
import Item from "../../Common/Item";

const Container = styled.div`
  padding:10px 50px;
  `;

const TVPresenter = (props) => {
  const {topRated, popular, airingToday} = props;
  // console.log(topRated) // Q. 콘솔의 결과가 topRated만 찍여야 하는데 왜 props들이 다 찍히는지 모르겠다 ..!

  return (
    <>
      <Container>
        {topRated.isLoading ? (<div> topRated 로딩중입니다..</div>) :
          <Section topRated={topRated} title="Top Rated Shows">
            {topRated.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_name}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.first_air_date && item.first_air_date.substring(0, 4)}
                     isTV={true}
              />)
            )}</Section>}

        {popular.isLoading ? (<div> popular 로딩중입니다..</div>) :
          <Section title="Popular Shows">
            {popular.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_name}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.first_air_date && item.first_air_date.substring(0, 4)}
                     isTV={true}

              />)
            )}</Section>}

        {airingToday.isLoading ? (<div> airingToday 로딩중입니다..</div>) :
          <Section title="Airing Today Shows">
            {airingToday.data.map((item) =>
              (<Item key={item.id}
                     id={item.id}
                     title={item.original_name}
                     rating={item.vote_average}
                     imageUrl={item.poster_path}
                     year={item.first_air_date && item.first_air_date.substring(0, 4)}
                     isTV={true}

              />)
            )}</Section>}
      </Container>
    </>
  )
};

TVPresenter.propTypes = {
  topRated: PropTypes.object.isRequired,
  popular: PropTypes.object.isRequired,
  airingToday: PropTypes.object.isRequired
};

export default TVPresenter