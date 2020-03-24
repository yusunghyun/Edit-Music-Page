import React, { useEffect } from 'react';
import MusicList from '../components/MusicList';
import {useSelector,useDispatch} from 'react-redux'
import {getMusicListAsync,updateMusicListAsync,deleteMusicListAsync,postMusicListAsync} from '../modules/music'
import AddMusic from '../components/AddMusic';


const MusicContainer = () => {
  const {musicList} = useSelector(({music})=>({
    musicList:music.musicList
  }))
  const dispatch = useDispatch()
  return (
    <>
    <MusicList
      musicList={musicList}
      getMusicListAsync={()=>dispatch(getMusicListAsync())}
      updateMusicListAsync={()=>dispatch(updateMusicListAsync())}
      deleteMusicListAsync={({id})=>{
        return dispatch(deleteMusicListAsync({id}))
      }}
    />
    <AddMusic
    postMusicListAsync={(fd)=>dispatch(postMusicListAsync(fd))}
    />
    </>
  );
};

export default MusicContainer;