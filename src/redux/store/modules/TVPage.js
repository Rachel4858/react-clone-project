// action
const GET_TV_TOP_RATED = 'tvPage/getTvTopRated';
const GET_TV_POPULAR = 'tvPage/getTvPopular';
const GET_TV_AIRING_TODAY = 'tvPage/getTvAiringToday';

//action creator
export const getTvTopRated = (payload) => ({type: GET_TV_TOP_RATED, payload});
export const getTvPopular = (payload) => ({type: GET_TV_POPULAR, payload});
export const getTvAiringToday = (payload) => ({type: GET_TV_AIRING_TODAY, payload});

//state(store 안에서 사용할)
const initialState = {
  topRated: null,
  popular: null,
  airingToday: null,
  error: null,
  loading: true
};

//reducer
export default function tvPage(state = initialState, action) {
  switch (action.type) {
    case GET_TV_TOP_RATED :
      return {
        ...state, // 다른 state 값이 있을 수 있으니 불변성 유지를 위해 필요하다.
        topRated: action.payload
      };
    case GET_TV_POPULAR :
      return {
        ...state,
        popular: action.payload
      };
    case GET_TV_AIRING_TODAY :
      return {
        ...state,
        airingToday: action.payload
      };
    default:
      return state;
  }
}