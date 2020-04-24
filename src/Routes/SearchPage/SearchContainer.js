import React from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi, tvApi} from "../../api";
import {getTvSearchData, getTvSearchDataSuccess, getTvSearchDataFailure} from "../../redux/store/modules/SearchPage";
import {getMovieSearchData, getMovieSearchDataSuccess, getMovieSearchDataFailure} from "../../redux/store/modules/SearchPage";
import {updateSearchTerm, updateIsInput} from "../../redux/store/modules/SearchPage";
import {connect} from "react-redux";

class SearchContainer extends React.Component {

  handleSubmit = (e) => { //input창에 입력 후 enter누르면 api 찌르는 함수 실행
    const {searchTerm} = this.props;
    e.preventDefault();
    if(searchTerm !== "") {
      this.props.updateIsInput({isInput:true});
      this.searchByTerm();
    }
  };

  updateTerm = (e) => { //input창에 입력시 입력값을 state에 반영
    const {target : {value}} = e;
    this.props.updateSearchTerm({searchTerm:value});

  };

  searchByTerm = () => {
    const {searchTerm} = this.props;
    this.props.getTvSearchData();
    this.props.getMovieSearchData();

    tvApi.search(searchTerm).then((res) => {
      this.props.getTvSearchDataSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getTvSearchDataFailure({error: err});
    });

    movieApi.search(searchTerm).then((res) => {
      this.props.getMovieSearchDataSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getMovieSearchDataFailure({error: err});
    });


  };

  render() {
    const {searchTerm, tvData, movieData, isInput} = this.props;
    return(
      <div>
        <SearchPresenter
          searchTerm={searchTerm}
          tvData={tvData}
          movieData={movieData}
          isInput={isInput}
          handleSubmit={this.handleSubmit}
          updateTerm={this.updateTerm}
      /> </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    searchTerm: store.searchPage.searchTerm,
    isInput: store.searchPage.isInput,
    tvData: store.searchPage.tvData,
    movieData: store.searchPage.movieData
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTvSearchData: () => {
      dispatch(getTvSearchData())
    },
    getTvSearchDataSuccess: (payload) => {
      dispatch(getTvSearchDataSuccess(payload))
    },
    getTvSearchDataFailure: (payload) => {
      dispatch(getTvSearchDataFailure(payload))
    },
    getMovieSearchData: () => {
      dispatch(getMovieSearchData())
    },
    getMovieSearchDataSuccess: (payload) => {
      dispatch(getMovieSearchDataSuccess(payload))
    },
    getMovieSearchDataFailure: (payload) => {
      dispatch(getMovieSearchDataFailure(payload))
    },
    updateSearchTerm: (payload) => {
      dispatch(updateSearchTerm(payload))
    },
    updateIsInput: (payload) => {
      dispatch(updateIsInput(payload))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

