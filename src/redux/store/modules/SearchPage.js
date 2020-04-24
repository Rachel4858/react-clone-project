// action
const GET_TV_SEARCH_DATA = '[SEARCH_PAGE]GET_TV_SEARCH_DATA';
const GET_TV_SEARCH_DATA_SUCCESS = '[SEARCH_PAGE]GET_TV_SEARCH_DATA_SUCCESS';
const GET_TV_SEARCH_DATA_FAILURE = '[SEARCH_PAGE]GET_TV_SEARCH_DATA_FAILURE';
const GET_MOVIE_SEARCH_DATA = '[SEARCH_PAGE]GET_MOVIE_SEARCH_DATA';
const GET_MOVIE_SEARCH_DATA_SUCCESS = '[SEARCH_PAGE]GET_MOVIE_SEARCH_DATA_SUCCESS';
const GET_MOVIE_SEARCH_DATA_FAILURE = '[SEARCH_PAGE]GET_MOVIE_SEARCH_DATA_FAILURE';
const UPDATE_SEARCH_TERM = '[SEARCH_PAGE]UPDATE_SEARCH_TERM';
const UPDATE_IS_INPUT = '[SEARCH_PAGE]UPDATE_IS_INPUT';

//action creator
export const getTvSearchData = () => ({type: GET_TV_SEARCH_DATA});
export const getTvSearchDataSuccess = (payload) => ({type: GET_TV_SEARCH_DATA_SUCCESS, payload});
export const getTvSearchDataFailure = (payload) => ({type: GET_TV_SEARCH_DATA_FAILURE, payload});
export const getMovieSearchData = () => ({type: GET_MOVIE_SEARCH_DATA});
export const getMovieSearchDataSuccess = (payload) => ({type: GET_MOVIE_SEARCH_DATA_SUCCESS, payload});
export const getMovieSearchDataFailure = (payload) => ({type: GET_MOVIE_SEARCH_DATA_FAILURE, payload});
export const updateSearchTerm = (payload) => ({type: UPDATE_SEARCH_TERM, payload});
export const updateIsInput = (payload) => ({type: UPDATE_IS_INPUT, payload});


//state(store 안에서 사용할)
const initialState = {
  searchTerm:'',
  isInput:false,
  tvData: {
    isLoading: true,
    data: null,
    error: null
  },
  movieData: {
    isLoading: true,
    data: null,
    error: null
  }
};

//reducer
export default function searchPage(state = initialState, action) {
  // console.log(action.payload) // {payload :{data:res.data.results}}

  switch (action.type) {
    case GET_TV_SEARCH_DATA :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        tvData: {
          ...state.tvData,
          isLoading: true,
        }
      };
    case GET_TV_SEARCH_DATA_SUCCESS :
      return {
        ...state,
        tvData: {
          ...state.tvData,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_TV_SEARCH_DATA_FAILURE :
      return {
        ...state,
        tvData: {
          ...state.tvData,
          error: action.payload.error
        }
      };

    case GET_MOVIE_SEARCH_DATA :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        movieData: {
          ...state.movieData,
          isLoading: true,
        }
      };
    case GET_MOVIE_SEARCH_DATA_SUCCESS :
      return {
        ...state,
        movieData: {
          ...state.movieData,
          isLoading: false,
          data: action.payload.data,
        }
      };
    case GET_MOVIE_SEARCH_DATA_FAILURE :
      return {
        ...state,
        movieData: {
          ...state.movieData,
          error: action.payload.error
        }
      };
    case UPDATE_SEARCH_TERM :
      return {
        ...state,
        searchTerm:action.payload.searchTerm
      };
      case UPDATE_IS_INPUT :
      return {
        ...state,
        isInput:action.payload.isInput
      };
    default:
      return state;
  }
}