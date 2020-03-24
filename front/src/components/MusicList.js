import React, { useEffect } from 'react';
import EditMusic from './EditMusic';

const MusicList = ({musicList,getMusicListAsync,updateMusicListAsync,deleteMusicListAsync}) => {
  useEffect(()=>{
    getMusicListAsync()
  },[])
  return (
    <div>
      {
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
      }
      
    </div>
  );
};

export default MusicList;