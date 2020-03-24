import {combineReducers} from 'redux'
import auth from './auth.js'
import music from './music.js'

const rootReducer = combineReducers({
  auth,
  music,
})

export default rootReducer;