// action
const GET_MOVIE_NOW_PLAYING = '[MOVIE_PAGE]GET_MOVIE_NOW_PLAYING';
const GET_MOVIE_NOW_PLAYING_SUCCESS = '[MOVIE_PAGE]GET_MOVIE_NOW_PLAYING_SUCCESS';
const GET_MOVIE_NOW_PLAYING_FAILURE = '[MOVIE_PAGE]GET_MOVIE_NOW_PLAYING_FAILURE';
const GET_MOVIE_POPULAR = '[MOVIE_PAGE]GET_MOVIE_POPULAR';
const GET_MOVIE_POPULAR_SUCCESS = '[MOVIE_PAGE]GET_MOVIE_POPULAR_SUCCESS';
const GET_MOVIE_POPULAR_FAILURE = '[MOVIE_PAGE]GET_MOVIE_POPULAR_FAILURE';
const GET_MOVIE_UPCOMING = '[MOVIE_PAGE]GET_MOVIE_UPCOMING';
const GET_MOVIE_UPCOMING_SUCCESS = '[MOVIE_PAGE]GET_MOVIE_UPCOMING_SUCCESS';
const GET_MOVIE_UPCOMING_FAILURE = '[MOVIE_PAGE]GET_MOVIE_UPCOMING_FAILURE';

//action creator
export const getMovieNowPlaying = () => ({type: GET_MOVIE_NOW_PLAYING});
export const getMovieNowPlayingSuccess = (payload) => ({type: GET_MOVIE_NOW_PLAYING_SUCCESS, payload});
export const getMovieNowPlayingFailure = (payload) => ({type: GET_MOVIE_NOW_PLAYING_FAILURE, payload});
export const getMoviePopular = () => ({type: GET_MOVIE_POPULAR});
export const getMoviePopularSuccess = (payload) => ({type: GET_MOVIE_POPULAR_SUCCESS, payload});
export const getMoviePopularFailure = (payload) => ({type: GET_MOVIE_POPULAR_FAILURE, payload});
export const getMovieUpComing = () => ({type: GET_MOVIE_UPCOMING});
export const getMovieUpComingSuccess = (payload) => ({type: GET_MOVIE_UPCOMING_SUCCESS, payload});
export const getMovieUpComingFailure = (payload) => ({type: GET_MOVIE_UPCOMING_FAILURE, payload});


//state(store 안에서 사용할)
const initialState = {  //isLoading,data,error은 api단위로
  nowPlaying: {
    isLoading: true,
    data: null,
    error: null
  },
  popular: {
    isLoading: true,
    data: null,
    error: null
  },
  upcoming: {
    isLoading: true,
    data: null,
    error: null
  }
};

//reducer
export default function moviePage(state = initialState, action) {
  // console.log(action.payload) // {payload :{data:res.data.results}}

  switch (action.type) {
    case GET_MOVIE_NOW_PLAYING :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        nowPlaying: {
          ...state.nowPlaying,
          isLoading: true,
        }
      };
    case GET_MOVIE_NOW_PLAYING_SUCCESS :
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_MOVIE_NOW_PLAYING_FAILURE :
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          error: action.payload.error
        }
      };

    case GET_MOVIE_POPULAR :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        popular: {
          ...state.popular,
          isLoading: true,
        }
      };
    case GET_MOVIE_POPULAR_SUCCESS :
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_MOVIE_POPULAR_FAILURE :
      return {
        ...state,
        popular: {
          ...state.popular,
          error: action.payload.error
        }
      };

    case GET_MOVIE_UPCOMING :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        upcoming: {
          ...state.upcoming,
          isLoading: true,
        }
      };
    case GET_MOVIE_UPCOMING_SUCCESS :
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_MOVIE_UPCOMING_FAILURE :
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}