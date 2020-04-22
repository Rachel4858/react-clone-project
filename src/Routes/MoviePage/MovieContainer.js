import React from "react";
import MoviePresenter from "./MoviePresenter";
import {movieApi} from "../../api";
import {getMovieNowPlaying, getMovieNowPlayingSuccess, getMovieNowPlayingFailure} from "../../redux/store/modules/MoviePage";
import {getMoviePopular, getMoviePopularSuccess, getMoviePopularFailure} from "../../redux/store/modules/MoviePage";
import {getMovieUpComing, getMovieUpComingSuccess, getMovieUpComingFailure} from "../../redux/store/modules/MoviePage";
import {connect} from "react-redux";



class MovieContainer extends React.Component {

  componentDidMount() {
    this.props.getMovieNowPlaying();
    this.props.getMoviePopular();
    this.props.getMovieUpComing();

    movieApi.nowPlaying().then((res) => {
      this.props.getMovieNowPlayingSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getMovieNowPlayingFailure({error: err});
    });

    movieApi.popular().then((res) => {
      this.props.getMoviePopularSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getMoviePopularFailure({error: err});
    });

    movieApi.upcoming().then((res) => {
      this.props.getMovieUpComingSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getMovieUpComingFailure({error: err});
    });

  }

  render() {
    const {nowPlaying, popular, upcoming} = this.props;

    return (
      <>
        <MoviePresenter
          nowPlaying={nowPlaying}
          popular={popular}
          upcoming={upcoming}
        />
      </>
    )
  }
}

//
const mapStateToProps = (store, ownProps) => {
  // store에 저장된 값을 이 컴포넌트에서 사용할 수 있도록 정의하는 부분
  return {
    nowPlaying: store.moviePage.nowPlaying,
    popular: store.moviePage.popular,
    upcoming: store.moviePage.upcoming
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // 액션을 이 컴포넌트에 사용할 수 있도록 정의하는 부분
  // 즉 디스패치 = 액션을 발생시킨다
  return {
    getMovieNowPlaying: () => {
      dispatch(getMovieNowPlaying())
    },
    getMovieNowPlayingSuccess: (payload) => {
      dispatch(getMovieNowPlayingSuccess(payload))
    },
    getMovieNowPlayingFailure: (payload) => {
      dispatch(getMovieNowPlayingFailure(payload))
    },
    getMoviePopular: () => {
      dispatch(getMoviePopular())
    },
    getMoviePopularSuccess: (payload) => {
      dispatch(getMoviePopularSuccess(payload))
    },
    getMoviePopularFailure: (payload) => {
      dispatch(getMoviePopularFailure(payload))
    },
    getMovieUpComing: () => {
      dispatch(getMovieUpComing())
    },
    getMovieUpComingSuccess: (payload) => {
      dispatch(getMovieUpComingSuccess(payload))
    },
    getMovieUpComingFailure: (payload) => {
      dispatch(getMovieUpComingFailure(payload))
    }
  }
};

// 위에 작업한 mapStateToProps와 mapDispatchToProps를 이 컴포넌트 안에서 this.prop로 접근해 사용할 수 있도록 connect로 연결해줌.
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
