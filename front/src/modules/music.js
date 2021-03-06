import { handleActions, createAction } from 'redux-actions'
import * as api from '../lib/api'

const GET_MUSIC = 'music/GET_MUSIC'
const SEARCH_MUSIC = 'music/SEARCH_MUSIC'

export const getMusicList = createAction(GET_MUSIC)
export const searchMusicAction = createAction(SEARCH_MUSIC)

const initialState = {
  musicList:[],
  searchMusic:[],
}

const music = handleActions({
  [GET_MUSIC]: (state, {payload:result}) => ({
    ...state,
    musicList:result
  }),
  [SEARCH_MUSIC]: (state, {payload:result}) => ({
    ...state,
    searchMusic: state.musicList.filter((ele)=>ele.title.indexOf(result)!==-1)
  })
  
  
},initialState)

export default music;

export const getMusicListAsync = () => async dispatch => {
  try{
    const result = await api.music.getMusicList()
    dispatch(getMusicList(result))
  } catch(err) {
    console.error(err)
  }
}
export const updateMusicListAsync = ({id,title,artist,album,track}) => async dispatch => {
  try{
    const result = await api.music.updateMusic({id,title,artist,album,track})
    dispatch(getMusicList(result))
  } catch(err) {
    console.error(err)
  }
}
export const deleteMusicListAsync = ({id}) => async dispatch => {
  try{
    const result = await api.music.deleteMusic({id})
    console.log('delete')
    dispatch(getMusicList(result))
  } catch(err) {
    console.error(err)
  }
}

export const postMusicListAsync = (fd) => async dispatch => {
  try{
    const result = await api.music.postMusic(fd)
    dispatch(getMusicList(result))
  } catch(err) {
    console.error(err)
  }
}