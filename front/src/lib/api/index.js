import axios from 'axios'

const DOMAIN = 'http://api.ysh616.com'
const UNAUTHORIZED = 401


const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
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
    return request('post','/auth/login',{userid,password})
  },
  register({userid,username,password}){
    return request('post','/auth/register',{userid,username,password})
  },
  logout(){
    return request('get','/auth/logout')
  },
}

