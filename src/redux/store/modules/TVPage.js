// action
const GET_TV_TOP_RATED = '[TV_PAGE]GET_TV_TOP_RATED';
const GET_TV_TOP_RATED_SUCCESS = '[TV_PAGE]GET_TV_TOP_RATED_SUCCESS';
const GET_TV_TOP_RATED_FAILURE = '[TV_PAGE]GET_TV_TOP_RATED_FAILURE';
const GET_TV_POPULAR = '[TV_PAGE]GET_TV_POPULAR';
const GET_TV_POPULAR_SUCCESS = '[TV_PAGE]GET_TV_POPULAR_SUCCESS';
const GET_TV_POPULAR_FAILURE = '[TV_PAGE]GET_TV_POPULAR_FAILURE';
const GET_TV_AIRING_TODAY = '[TV_PAGE]GET_TV_AIRING_TODAY';
const GET_TV_AIRING_TODAY_SUCCESS = '[TV_PAGE]GET_TV_AIRING_TODAY_SUCCESS';
const GET_TV_AIRING_TODAY_FAILURE = '[TV_PAGE]GET_TV_AIRING_TODAY_FAILURE';

//action creator
export const getTvTopRated = () => ({type: GET_TV_TOP_RATED});
export const getTvTopRatedSuccess = (payload) => ({type: GET_TV_TOP_RATED_SUCCESS, payload});
export const getTvTopRatedFailure = (payload) => ({type: GET_TV_TOP_RATED_FAILURE, payload});
export const getTvTopPopular = () => ({type: GET_TV_POPULAR});
export const getTvTopPopularSuccess = (payload) => ({type: GET_TV_POPULAR_SUCCESS, payload});
export const getTvTopPopularFailure = (payload) => ({type: GET_TV_POPULAR_FAILURE, payload});
export const getTvAiringToday = () => ({type: GET_TV_AIRING_TODAY});
export const getTvAiringTodaySuccess = (payload) => ({type: GET_TV_AIRING_TODAY_SUCCESS, payload});
export const getTvAiringTodayFailure = (payload) => ({type: GET_TV_AIRING_TODAY_FAILURE, payload});


//state(store 안에서 사용할)
const initialState = {  //isLoading,data,error은 api단위로
  topRated: {
    isLoading: true,
    data: null,
    error: null
  },
  popular: {
    isLoading: true,
    data: null,
    error: null
  },
  airingToday: {
    isLoading: true,
    data: null,
    error: null
  }
};

//reducer
export default function tvPage(state = initialState, action) {
  // console.log(action.payload) // {payload :{data:res.data.results}}

  switch (action.type) {
    case GET_TV_TOP_RATED :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        topRated: {
          ...state.topRated,
          isLoading: true,
        }
      };
    case GET_TV_TOP_RATED_SUCCESS :
      return {
        ...state,
        topRated: {
          ...state.topRated,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_TV_TOP_RATED_FAILURE :
      return {
        ...state,
        topRated: {
          ...state.topRated,
          error: action.payload.error
        }
      };

    case GET_TV_POPULAR :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        popular: {
          ...state.popular,
          isLoading: true,
        }
      };
    case GET_TV_POPULAR_SUCCESS :
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_TV_POPULAR_FAILURE :
      return {
        ...state,
        popular: {
          ...state.popular,
          error: action.payload.error
        }
      };

    case GET_TV_AIRING_TODAY :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        airingToday: {
          ...state.airingToday,
          isLoading: true,
        }
      };
    case GET_TV_AIRING_TODAY_SUCCESS :
      return {
        ...state,
        airingToday: {
          ...state.airingToday,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_TV_AIRING_TODAY_FAILURE :
      return {
        ...state,
        airingToday: {
          ...state.airingToday,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}