import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

//Redux초기화
import { combineReducers } from 'redux'

//스토어 생성함수, 미들웨어 처리 함수
import { createStore, applyMiddleware } from 'redux'
//전체 App을 리덕스에 구독시키기 위한 프로바이더
import { Provider } from 'react-redux'
//크롬개발자도구에 데브툴 연동(선택사항)
import { composeWithDevTools } from 'redux-devtools-extension'
//미들웨어 임폴트
import ReduxThunk from 'redux-thunk'
//리듀서 꺼네기
import rootReducer from './modules'
import {loginSuccessAction} from './modules/auth'

import * as api from './lib/api' 

//해석:스토어를 만들겠다 리듀서를 써서 composeWithDevTools()은 선택, 미들웨어는 ,ReduxThunk 다 라는 뜻
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)))

function loadUser(){
  try{
    const {accessToken} = localStorage;
    if(!accessToken) return;

    store.dispatch(loginSuccessAction({accessToken}))
    api.setAuthInHeader(accessToken)
  } catch (err) {
    console.log('로컬스토리지 x')
  }
}
loadUser()

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
