import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeField,initializeForm,registerAsync} from '../modules/auth'
import AuthForm from '../components/auth/AuthForm';
import {withRouter} from 'react-router-dom'

const RegisterContainer = ({history}) => {
  const dispatch = useDispatch();
  const {form, accessToken, authError} = useSelector(({auth})=>({
    form:auth.register,
    accessToken:auth.accessToken,
    authError:auth.authError

  }))
  const onChange = e => {
    const {value,name} = e.target;
    dispatch(
      changeField({
        form:'register',
        key:name,
        value
      })
    );
  };
  const onSubmit = e => {
    e.preventDefault();
    const {userid,username,password,passwordConfirm} = form;
    if(password !== passwordConfirm){
      return;
    }
    dispatch(registerAsync({userid,username,password}))
  }
  useEffect(()=>{
    dispatch(initializeForm('register'));
  },[dispatch])
  useEffect(()=>{
    if(authError){
      console.log('오류발생')
      console.log(authError)
      return;
    }
    if(accessToken){
      console.log('회원가입성공 registerContainer')
      console.log(accessToken)
      history.push('/')
    }
  },[history,accessToken,authError])///나중에 만져보자 user 모듈 만들어야 할수도!

  
  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterContainer);