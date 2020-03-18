import React from 'react';
import AuthTemplate from './auth/AuthTemplate'
import RegisterContainer from '../containers/RegisterContainer'

const Register = () => {
  return (
    <AuthTemplate>
      <RegisterContainer/>
    </AuthTemplate>
  );
};

export default Register;