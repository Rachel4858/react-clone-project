// action
const GET_DETAIL_DATA = '[DETAIL_PAGE]GET_DETAIL_DATA';
const GET_DETAIL_DATA_SUCCESS = '[DETAIL_PAGE]GET_DETAIL_DATA_SUCCESS';
const GET_DETAIL_DATA_FAILURE = '[DETAIL_PAGE]GET_DETAIL_DATA_FAILURE';
const GET_VEDIO_DATA = '[DETAIL_PAGE]GET_VEDIO_DATA';
const GET_VEDIO_DATA_SUCCESS = '[DETAIL_PAGE]GET_VEDIO_DATA_SUCCESS';
const GET_VEDIO_DATA_FAILURE = '[DETAIL_PAGE]GET_VEDIO_DATA_FAILURE';

//action creator
export const getDetailData = () => ({type: GET_DETAIL_DATA});
export const getDetailDataSuccess = (payload) => ({type: GET_DETAIL_DATA_SUCCESS, payload});
export const getDetailDataFailure = (payload) => ({type: GET_DETAIL_DATA_FAILURE, payload});
export const getVideoData = () => ({type: GET_VEDIO_DATA});
export const getVideoDataSuccess = (payload) => ({type: GET_VEDIO_DATA_SUCCESS, payload});
export const getVideoDataFailure = (payload) => ({type: GET_VEDIO_DATA_FAILURE, payload});


//state(store 안에서 사용할)
const initialState = {
  isLoading: true,
  result: null,
  error: null,
  videoData:{
    isLoading: true,
    videoKey: null,
    error: null
  }
};

//reducer
export default function detailPage(state = initialState, action) {
  // {payload :{data:res.data.results}}

  switch (action.type) {
    case GET_DETAIL_DATA :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        isLoading: true
      };
    case GET_DETAIL_DATA_SUCCESS :
      return {
        ...state,
        isLoading: false,
        result: action.payload.result
      };
    case GET_DETAIL_DATA_FAILURE :
      return {
        ...state,
        error: action.payload.error
      };
    case GET_VEDIO_DATA :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        videoData: {
          ...state.videoData,
          isLoading: true
        }
      };
    case GET_VEDIO_DATA_SUCCESS :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        videoData: {
          ...state.videoData,
          isLoading:false,
          videoKey: action.payload.result,
        }
      };
    case GET_VEDIO_DATA_FAILURE :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        videoData: {
          ...state.videoData,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}