import React from 'react';
import {Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      ㅎㅇ
      <Route component={Login} path='/login'/>
      <Route component={Register} path='/register'/>
    </>
  );
}

export default App;
