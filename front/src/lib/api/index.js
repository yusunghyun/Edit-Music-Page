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
    return request('post','/auth/logout')
  },
  update({id,password}){
    return request('put','/auth/update',{id,password})
  }
}

export const music = {
  async getMusicList(){
    let data = await request('get','/music/musiclist')
    return data
  },
  async postMusic(file){
    console.log(file)
    let data = await request('post','/music/musiclist',file,{headers:{'Content-Type':'multipart/form-data'}})
    return data
  },
  async updateMusic({id,title,artist,album,track}){
    console.log({id,title,artist,album,track})
    let data = await request('put','/music/musiclist',{id,title,artist,album,track})
    return data
  },
  async deleteMusic({id}){
    console.log('api/index.js')
    console.log(id)
    let data = await request('delete','/music/musiclist',{id})
    return data
  },
}