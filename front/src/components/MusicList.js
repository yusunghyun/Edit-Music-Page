import React, { useEffect, useState } from 'react';
import EditMusic from './EditMusic';

const MusicList = ({searchMusic,searchMusicAction,musicList,getMusicListAsync,updateMusicListAsync,deleteMusicListAsync}) => {
  useEffect(()=>{
    getMusicListAsync()
  },[])

  return (
    <div>
      {
        (searchMusic.length===0) ?
        musicList.map((ele,idx)=>(
          <div key={idx}>
          <span>{ele.title}</span>
          <span>{ele.artist}</span>
          <EditMusic 
            ele={ele}
            getMusicListAsync={getMusicListAsync}
            updateMusicListAsync={updateMusicListAsync}
            deleteMusicListAsync={deleteMusicListAsync}
          />
          </div>
        ))
        :
        searchMusic.map((ele,idx)=>(
          <div key={idx}>
          <span>{ele.title}</span>
          <span>{ele.artist}</span>
          <EditMusic 
            ele={ele}
            getMusicListAsync={getMusicListAsync}
            updateMusicListAsync={updateMusicListAsync}
            deleteMusicListAsync={deleteMusicListAsync}
          />
          </div>
        ))
      }
      
    </div>
  );
};

export default MusicList;