import axios from 'axios'

const DOMAIN = 'http://127.0.0.1:3000'
const UNAUTHORIZED = 401


const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => {
    console.log('api/index.js 13줄')
    return result.data
  })
    .catch(result => {
      const {status} = result.response
      // if (status === UNAUTHORIZED) 로그인창으로 보내는 문장
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const auth = {
  login({userid,password}){
    console.log('api/index.js 29줄')
    return request('post','/auth/login',{userid,password})
  },
  register({userid,username,password}){
    console.log('api/index.js 33줄')
    return request('post','/auth/register',{userid,username,password})
  },
  logout(){
    return request('get','/auth/logout')
  },
}

