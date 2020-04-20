import React from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";
import {getTvAiringToday, getTvPopular, getTvTopRated} from "../../redux/store/modules/TVPage";
import connect from "react-redux/lib/connect/connect";

class TVContainer extends React.Component {

  // async componentDidMount() {
  //   try {
  //     const {data: {results: topRated}} = await tvApi.topRated();
  //     getTvPopular()
  //
  //   } catch {
  //     console.log("에러")
  //   }
  //   finally {
  //     console.log("api연결")
  //   }
  //
  // }
  render() {
    return(
      <div>티비 컨테이너<TVPresenter/> </div>
    )
  }
}
//
// const mapStateToProps = (store, ownProps) => {
//   // store에 저장된 값을 이 컴포넌트에서 사용할 수 있도록 정의하는 부분
//   return {
//     topRated: store.tvPage.topRated,
//     popular: store.tvPage.popular,
//     airingToday: store.tvPage.airingToday,
//     error: store.tvPage.error,
//     loading: store.tvPage.loading,
//
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // 액션을 이 컴포넌트에 사용할 수 있도록 정의하는 부분
//   // 즉 디스패치 = 액션을 발생시킨다
//   return {
//     getTvTopRated: (payload) => {
//       dispatch(getTvTopRated(payload))
//     },
//     getTvPopular: (payload) => {
//       dispatch(getTvPopular(payload))
//     },
//     getTvAiringToday: (payload) => {
//       dispatch(getTvAiringToday(payload))
//     }
//   }
// }

// 위에 작업한 mapStateToProps와 mapDispatchToProps를 이 컴포넌트 안에서 this.prop로 접근해 사용할 수 있도록 connect로 연결해줌.
// export default connect(mapStateToProps, mapDispatchToProps)(TVContainer)
export default TVContainer;