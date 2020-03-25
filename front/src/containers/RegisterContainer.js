import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeField,initializeForm,registerAsync} from '../modules/auth'
import AuthForm from '../components/auth/AuthForm';
import {withRouter} from 'react-router-dom'

const RegisterContainer = ({history}) => {
  const [error,setError] = useState(null)
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
    if([userid,passwordConfirm,password].includes('')){
      setError('빈칸을 모두 입력해 주세요')
      return;
    }
    if(password !== passwordConfirm){
      setError('비밀번호가 일치하지 않습니다.')
      return;
    }
    dispatch(registerAsync({userid,username,password}))
  }
  useEffect(()=>{
    dispatch(initializeForm('register'));
  },[dispatch])
  useEffect(()=>{
    if(authError){
      if(authError.response.status === 409){
        setError('이미 존재하는 계정명입니다.')
      }
      setError('회원가입 실패')
      return;
    }
    if(accessToken){
      console.log('회원가입성공 registerContainer')
      history.push('/')
    }
  },[accessToken,authError])///나중에 만져보자 user 모듈 만들어야 할수도!

  
  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterContainer);