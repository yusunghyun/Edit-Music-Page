import { handleActions, createAction } from 'redux-actions'
import produce from 'immer'
import * as api from '../lib/api'

const CHANGE_FIELD = 'auth/CHANGE_FIELD'
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

const LOGIN = 'auth/LOGIN'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'

const REGISTER = 'auth/REGISTER'
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'

const LOGOUT = 'auth/LOGOUT'


export const changeField = createAction(CHANGE_FIELD)
export const initializeForm = createAction(INITIALIZE_FORM);//register

export const loginAction = createAction(LOGIN)
export const loginSuccessAction = createAction(LOGIN_SUCCESS)
export const loginFailureAction = createAction(LOGIN_FAILURE)

export const registerAction = createAction(REGISTER)
export const registerSuccessAction = createAction(REGISTER_SUCCESS)
export const registerFailureAction = createAction(REGISTER_FAILURE)

export const logoutAction = createAction(LOGOUT)

const initialState = {
  register:{
    userid:'',
    username:'',
    password:'',
    passwordConfirm:'',
  },
  login:{
    userid:'',
    password:'',
  },
  accessToken:null,
  authError:null,
}

const auth = handleActions({
  [CHANGE_FIELD]: (state, {payload:{form,key,value}}) => 
    produce(state, draft=>{
      draft[form][key] = value;
    }),
  [INITIALIZE_FORM]: (state, {payload:form}) => ({
    ...state,
    [form]: initialState[form],
    authError:null,
  }),
  [LOGIN]: (state,{payload}) => ({
    ...state,
    loading:true
  }),
  [LOGIN_SUCCESS]: (state,{payload:accessToken}) => ({
    ...state,
    authError:null,
    accessToken,
  }),
  [LOGIN_FAILURE]: (state,{payload:error}) => ({
    ...state,
    authError:error,
  }),
  [REGISTER]: (state,{payload}) => ({
    ...state,
    
  }),
  [REGISTER_SUCCESS]: (state,{payload:accessToken}) => ({
    ...state,
    authError:null,
    accessToken,
  }),
  [REGISTER_FAILURE]: (state,{payload:error}) => ({
    ...state,
    authError:error,
  }),
  [LOGOUT]: (state,{payload}) => ({
    ...state,
    accessToken:null,
  }),
  
},initialState)

export default auth;

export const loginAsync = ({userid,password}) => async dispatch => {
  try{
    const result = await api.auth.login({userid,password})
    dispatch(loginSuccessAction({accessToken:result.accessToken}))
    localStorage.accessToken = result.accessToken
    api.setAuthInHeader(result.accessToken)
  } catch(err){
    dispatch(loginFailureAction({error:err}))
  }
}

export const registerAsync = ({userid,password,username}) => async dispatch => {
  try{
    const result = await api.auth.register({userid,password,username})
    dispatch(registerSuccessAction({accessToken:result.accessToken}))
    localStorage.accessToken = result.accessToken
    api.setAuthInHeader(result.accessToken)
  } catch(err) {
    dispatch(registerFailureAction({error:err}))
  }
}


export const logoutAsync = () => async dispatch => {
  await api.auth.logout()
  dispatch(logoutAction())
  delete localStorage.accessToken
  api.setAuthInHeader(null)
}
// export const  = () => async dispatch => {
//   const result = await 
//   return 
// }