import React from 'react';
import AuthTemplate from './auth/AuthTemplate'
import AuthForm from './auth/AuthForm'

const Register = () => {
  return (
    <AuthTemplate>
      <AuthForm type='register'/>
    </AuthTemplate>
  );
};

export default Register;