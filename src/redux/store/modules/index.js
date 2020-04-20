import {combineReducers} from 'redux';
import tvPage from './TVPage'


// export default로 내보내준 이름은 import하는 곳에서 원하는 이름으로 받을 수 있다.
export default combineReducers({
  tvPage,
})
