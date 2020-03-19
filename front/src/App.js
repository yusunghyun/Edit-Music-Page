import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import MusicPage from './components/MusicPage';

function App({history}) {
  React.useEffect(()=>{
    if(!localStorage.accessToken){
      history.push('/login')
    }
  },[])

  return (
    <>
      <MusicPage/>
      <Route component={Login} path='/login'/>
      <Route component={Register} path='/register'/>
    </>
  );
}

export default withRouter(App);
