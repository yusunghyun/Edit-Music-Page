import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App({history}) {
  React.useEffect(()=>{
    if(!localStorage.accessToken){
      history.push('/login')
    }
  },[])

  return (
    <>
      <Route component={Login} path='/login'/>
      <Route component={Register} path='/register'/>
    </>
  );
}

export default withRouter(App);
