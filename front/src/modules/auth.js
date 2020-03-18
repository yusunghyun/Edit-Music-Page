import { handleActions, createAction } from 'redux-actions'

const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
const JOIN = 'login/JOIN'
const EDIT_PASSWORD = 'login/EDIT_PASSWORD'

export const loginAction = createAction(LOGIN)

const initialState = {
  accessToken: null,
  musicList: [],

}

const auth = handleActions({
  [LOGIN]: (state, {payload}) => {
    return {
      ...state,

    }
  },
},initialState)

export default auth;

// export const  = () => async dispatch => {
//   const result = await 
//   return 
// }