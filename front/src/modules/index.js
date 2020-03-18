import {combineReducers} from 'redux'
import auth from './auth.js'
// import musicModule from './music.js'

const rootReducer = combineReducers({
  auth,
  // musicModule,
})

export default rootReducer;