import React from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvApi} from "../../api";
import {getDetailData, getDetailDataSuccess, getDetailDataFailure} from "../../redux/store/modules/DetailPage";
import {connect} from "react-redux";


class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getDetailData();

    const parseIntId = parseInt(this.props.match.params.id);
    const isTV = this.props.match.path.includes("/tv/");

    if(isTV) {
      tvApi.tvDetail(parseIntId).then((res) => {
        // console.log(res.data); // 이렇게 데이터가 잘 들어오는것을 확인했는데.
        // this.props.getDetailDataSuccess({result:res.data}) // 이 액션함수 발생시키면 에러가 뜬다.ㅠ
      }).catch((err) => {
        // this.props.getDetailDataFailure({error:err})
      })
    } else {
      movieApi.movieDetail(parseIntId).then((res) => {
        // console.log(res.data);
        // this.props.getDetailDataSuccess({result:res.data})
      }).catch((err) => {
        // this.props.getDetailDataFailure({error:err})
      })
    }

  }

  render() {

    return (
      <div>디테일 컨테이너<DetailPresenter/></div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.detailPage.isLoading,
    result: store.detailPage.result,
    error: store.detailPage.error,
    isTV: store.detailPage.isTV
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailData: () => {
      dispatch(getDetailData())
    },    getDetailDataSuccess: () => {
      dispatch(getDetailDataSuccess())
    },    getDetailDataFailure: () => {
      dispatch(getDetailDataFailure())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)
