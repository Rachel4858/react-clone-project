import React from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";
import {getTvTopRated, getTvTopRatedSuccess, getTvTopRatedFailure} from "../../redux/store/modules/TVPage";
import {getTvTopPopular, getTvTopPopularSuccess, getTvTopPopularFailure} from "../../redux/store/modules/TVPage";
import {getTvAiringToday, getTvAiringTodaySuccess, getTvAiringTodayFailure} from "../../redux/store/modules/TVPage";
import {connect} from "react-redux";

class TVContainer extends React.Component {

  componentDidMount() {
    this.props.getTvTopRated();
    this.props.getTvTopPopular();
    this.props.getTvAiringToday();

    tvApi.topRated().then((res) => {
      this.props.getTvTopRatedSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getTvTopRatedFailure({error: err});
    });

    tvApi.popular().then((res) => {
      this.props.getTvTopPopularSuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getTvTopPopularFailure({error: err});
    });

    tvApi.airingToday().then((res) => {
      this.props.getTvAiringTodaySuccess({data: res.data.results});
    }).catch((err) => {
      this.props.getTvAiringTodayFailure({error: err});
    });

  }

  render() {
    const {topRated, popular, airingToday} = this.props;

    return (
      <>
        <TVPresenter
          topRated={topRated}
          popular={popular}
          airingToday={airingToday}
        />
      </>
    )
  }
}

//
const mapStateToProps = (store, ownProps) => {
  // store에 저장된 값을 이 컴포넌트에서 사용할 수 있도록 정의하는 부분
  return {
    topRated: store.tvPage.topRated,
    popular: store.tvPage.popular,
    airingToday: store.tvPage.airingToday
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // 액션을 이 컴포넌트에 사용할 수 있도록 정의하는 부분
  // 즉 디스패치 = 액션을 발생시킨다
  return {
    getTvTopRated: () => {
      dispatch(getTvTopRated())
    },
    getTvTopRatedSuccess: (payload) => {
      dispatch(getTvTopRatedSuccess(payload))
    },
    getTvTopRatedFailure: (payload) => {
      dispatch(getTvTopRatedFailure(payload))
    },
    getTvTopPopular: () => {
      dispatch(getTvTopPopular())
    },
    getTvTopPopularSuccess: (payload) => {
      dispatch(getTvTopPopularSuccess(payload))
    },
    getTvTopPopularFailure: (payload) => {
      dispatch(getTvTopPopularFailure(payload))
    },
    getTvAiringToday: () => {
      dispatch(getTvAiringToday())
    },
    getTvAiringTodaySuccess: (payload) => {
      dispatch(getTvAiringTodaySuccess(payload))
    },
    getTvAiringTodayFailure: (payload) => {
      dispatch(getTvAiringTodayFailure(payload))
    }
  }
};

// 위에 작업한 mapStateToProps와 mapDispatchToProps를 이 컴포넌트 안에서 this.prop로 접근해 사용할 수 있도록 connect로 연결해줌.
export default connect(mapStateToProps, mapDispatchToProps)(TVContainer)
