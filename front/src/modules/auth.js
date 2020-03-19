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

const MODAL_OPEN = 'auth/MODAL_OPEN'
const MODAL_CLOSE = 'auth/MODAL_CLOSE'

const EDIT_PASSWORD = 'auth/EDIT_PASSWORD'

export const changeField = createAction(CHANGE_FIELD)
export const initializeForm = createAction(INITIALIZE_FORM);//register

export const loginAction = createAction(LOGIN)
export const loginSuccessAction = createAction(LOGIN_SUCCESS)
export const loginFailureAction = createAction(LOGIN_FAILURE)

export const registerAction = createAction(REGISTER)
export const registerSuccessAction = createAction(REGISTER_SUCCESS)
export const registerFailureAction = createAction(REGISTER_FAILURE)

export const logoutAction = createAction(LOGOUT)

export const modalOpenAction = createAction(MODAL_OPEN)
export const modalCloseAction = createAction(MODAL_CLOSE)

export const editPasswordAction = createAction(EDIT_PASSWORD)

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
  isModal:false,
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
  [MODAL_OPEN]:(state,{payload}) => ({
    ...state,
    isModal:true,
  }),
  [MODAL_CLOSE]:(state,{payload}) => ({
    ...state,
    isModal:false
  }),
  
},initialState)

export default auth;

export const loginAsync = ({userid,password}) => async dispatch => {
  try{
    console.log('modules/auth.js 94줄')
    const result = await api.auth.login({userid,password})
    console.log('modules/auth.js 96줄')
    dispatch(loginSuccessAction({accessToken:result.accessToken}))
    localStorage.accessToken = result.accessToken
    localStorage.id = result.id
    api.setAuthInHeader(result.accessToken)
    console.log('modules/auth.js 100줄')
  } catch(err){
    console.log('modules/auth.js 102줄')
    dispatch(loginFailureAction({error:err}))
  }
}

export const registerAsync = ({userid,password,username}) => async dispatch => {
  try{
    console.log('modules/auth.js 109줄')
    const result = await api.auth.register({userid,password,username})
    console.log('modules/auth.js 111줄')
    dispatch(registerSuccessAction({accessToken:result.accessToken}))
    localStorage.accessToken = result.accessToken
    localStorage.id = result.id
    api.setAuthInHeader(result.accessToken)
  } catch(err) {
    console.log('modules/auth.js 116줄')
    dispatch(registerFailureAction({error:err}))
  }
}

export const logoutAsync = () => dispatch => {
  try{
    console.log('124줄')
    api.auth.logout()
    console.log('126줄')
    dispatch(logoutAction())
    delete localStorage.accessToken
    delete localStorage.id
    api.setAuthInHeader(null)
  } catch(err){
    console.error(err)
  }
}

export const editPasswordAsync = ({id,password}) => async dispatch => {
  try{
    const result = await api.auth.update({id,password})
  } catch(err) {
    console.error(err)
  }
}
// export const  = () => async dispatch => {
//   const result = await 
//   return 
// }