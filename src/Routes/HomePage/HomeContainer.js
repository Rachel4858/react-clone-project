import React from "react";
import HomePresenter from "./HomePresenter";
import {movieApi, tvApi} from "../../api";

class HomeContainer extends React.Component {


  componentDidMount() {

      // tvApi.tvDetail(parseIntId).then((res) => {
      //   this.props.getDetailDataSuccess({result: res.data})
      // }).catch((err) => {
      //   this.props.getDetailDataFailure({error: err})
      // })
  }

  render() {

    return (
      <>
      <HomePresenter></HomePresenter>
        </>
    )
  }
}

export default HomeContainer