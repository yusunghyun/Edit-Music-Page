import React, { useEffect } from 'react';
import MusicList from '../components/MusicList';
import {useSelector,useDispatch} from 'react-redux'
import {getMusicListAsync,updateMusicListAsync,deleteMusicListAsync,postMusicListAsync,searchMusicAction} from '../modules/music'
import AddMusic from '../components/AddMusic';
import Search from '../components/Search';


const MusicContainer = () => {
  const {musicList,searchMusic} = useSelector(({music})=>({
    searchMusic:music.searchMusic,
    musicList:music.musicList
  }))
  const dispatch = useDispatch()
  return (
    <>
    <Search
      searchMusic={searchMusic}
      searchMusicAction={(result)=>dispatch(searchMusicAction(result))}
    />
    <MusicList
      searchMusic={searchMusic}
      musicList={musicList}
      getMusicListAsync={()=>dispatch(getMusicListAsync())}
      updateMusicListAsync={({id,title,artist,album,track})=>dispatch(updateMusicListAsync({id,title,artist,album,track}))}
      deleteMusicListAsync={({id})=>{
        return dispatch(deleteMusicListAsync({id}))
      }}
      searchMusicAction={(result)=>dispatch(searchMusicAction(result))}
    />
    <AddMusic
    postMusicListAsync={(fd)=>dispatch(postMusicListAsync(fd))}
    />
    </>
  );
};

export default MusicContainer;