import {combineReducers} from 'redux';
import tvPage from './TVPage';
import moviePage from './MoviePage';
import detailPage from './DetailPage'
import searchPage from './SearchPage'


// export default로 내보내준 이름은 import하는 곳에서 원하는 이름으로 받을 수 있다.
export default combineReducers({
  tvPage,
  moviePage,
  detailPage,
  searchPage
})
