import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeField,initializeForm,loginAsync} from '../modules/auth'
import AuthForm from '../components/auth/AuthForm';
import {withRouter} from 'react-router-dom'

const LoginContainer = ({history}) => {
  const dispatch = useDispatch();
  const {form,accessToken,authError} = useSelector(({auth})=>({
    form:auth.login,
    accessToken:auth.accessToken,
    authError:auth.authError,
  }))
  const onChange = e => {
    const {value,name} = e.target;
    dispatch(
      changeField({
        form:'login',
        key:name,
        value
      })
    );
  };
  const onSubmit = e => {
    e.preventDefault();
    const {userid,password} = form;
    dispatch(loginAsync({userid,password}))

  }
  useEffect(()=>{
    dispatch(initializeForm('login'));
  },[dispatch])
  
  useEffect(()=>{
    if(authError){
      return;
    }
    if(accessToken){
      history.push('/')
    }
  },[history,accessToken,authError])///나중에 만져보자 user 모듈 만들어야 할수도!

  
  return (
    <AuthForm
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(LoginContainer);