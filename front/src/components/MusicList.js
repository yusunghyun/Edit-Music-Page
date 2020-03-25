import React, { useEffect, useState } from 'react';
import EditMusic from './EditMusic';
import styled from 'styled-components'

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y:auto;
`;
const Item = styled.div`
  padding:1rem;
  display: flex;
  align-items:center;
  &:nth-child(even){
      background: #f8f9fa;
  }
  &+&{
    border-top:1px solid #dee2e6;
  }
`;
const Text = styled.div`
  cursor:pointer;
  flex:1;
  display: flex;
  align-items:center;
`;


const MusicList = ({searchMusic,searchMusicAction,musicList,getMusicListAsync,updateMusicListAsync,deleteMusicListAsync}) => {
  useEffect(()=>{
    if(localStorage.accessToken) getMusicListAsync()
  },[localStorage.accessToken])

  return (
    <List>
      {
        (searchMusic.length===0) ?
        musicList.map((ele,idx)=>(
          <Item key={idx}>
          <Text>
          <span>{ele.title} - </span>
          <span>{ele.artist} .mp3</span>
          </Text>
          <EditMusic 
            ele={ele}
            getMusicListAsync={getMusicListAsync}
            updateMusicListAsync={updateMusicListAsync}
            deleteMusicListAsync={deleteMusicListAsync}
          />
          </Item>
        ))
        :
        searchMusic.map((ele,idx)=>(
          <Item key={idx}>
          <Text>
          <span>{ele.title}</span>
          <span>{ele.artist}</span>
          </Text>
          <EditMusic 
            ele={ele}
            getMusicListAsync={getMusicListAsync}
            updateMusicListAsync={updateMusicListAsync}
            deleteMusicListAsync={deleteMusicListAsync}
          />
          </Item>
        ))
      }
      
    </List>
  );
};

export default MusicList;