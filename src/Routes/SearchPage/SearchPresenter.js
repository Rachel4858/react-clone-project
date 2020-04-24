import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Item from "../../Components/Item";

const Container = styled.div`
  padding:10px 50px 0px 50px;
`;

const Form = styled.form`
  width:100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all:unset;
  padding-left:15px;
  width:490px;
  background-color:#000000;
  color:#ffffff;
  font-size:25px;
  height:30px;
  border:solid 1px grey;
  border-radius:3px;
`;



const SearchPresenter = ({ searchTerm, tvData, movieData, handleSubmit, updateTerm, isInput }) => {
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {!isInput ? <div>키워드를 입력후 enter를 눌러주세요</div> : (<>
        {/*{!isInput ? <div>키워드를 입력후 enter를 눌러주세요</div> : (<>*/}
          {
            tvData.isLoading ? (<div> tvData 로딩중입니다..</div>) :
              <Section tvData={tvData} title="TV Shows">
                {tvData.data.map((item) =>
                  (<Item key={item.id}
                         id={item.id}
                         title={item.original_name}
                         rating={item.vote_average}
                         imageUrl={item.poster_path}
                         year={item.first_air_date && item.first_air_date.substring(0, 4)}
                  />)
                )}</Section>
          }

        {movieData.isLoading ? (<div> movieData 로딩중입니다..</div>) :
          <Section movieData={movieData} title="Movie Shows">
          {movieData.data.map((item) =>
            (<Item key={item.id}
                   id={item.id}
                   title={item.original_name}
                   rating={item.vote_average}
                   imageUrl={item.poster_path}
                   year={item.first_air_date && item.first_air_date.substring(0, 4)}
            />)
          )}</Section>}</>)
        }



      </Container>
    </>
  )
};
export default SearchPresenter