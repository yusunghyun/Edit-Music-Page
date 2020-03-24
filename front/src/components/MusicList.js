import React, { useEffect } from 'react';
import EditMusicModal from './EditMusicModal';

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
          <EditMusicModal 
            id={ele.id}
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