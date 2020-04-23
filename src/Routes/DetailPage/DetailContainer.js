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

    if (isTV) {
      tvApi.tvDetail(parseIntId).then((res) => {
        this.props.getDetailDataSuccess({result: res.data})
      }).catch((err) => {
        this.props.getDetailDataFailure({error: err})
      })
    } else {
      movieApi.movieDetail(parseIntId).then((res) => {
        this.props.getDetailDataSuccess({result: res.data})
      }).catch((err) => {
        this.props.getDetailDataFailure({error: err})
      })
    }

  }

  render() {
    const {isLoading, result, error} = this.props;

    return (
      <DetailPresenter
        isLoading={isLoading}
        result={result}
        error={error}
      />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.detailPage.isLoading,
    result: store.detailPage.result,
    error: store.detailPage.error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailData: () => {
      dispatch(getDetailData())
    }, getDetailDataSuccess: (payload) => {
      dispatch(getDetailDataSuccess(payload))
    }, getDetailDataFailure: (payload) => {
      dispatch(getDetailDataFailure(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)
