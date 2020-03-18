import React from 'react';
import AuthTemplate from './auth/AuthTemplate'
import LoginContainer from '../containers/LoginContainer'

const Login = () => {
  return (
    <AuthTemplate>
      <LoginContainer/>
    </AuthTemplate>
  );
};

export default Login;