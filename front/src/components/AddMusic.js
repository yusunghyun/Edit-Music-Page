import React, { useEffect, useState } from 'react';
import * as api from '../lib/api'

const AddMusic = ({postMusicListAsync}) => {
  
  return (
    <>
      <form onSubmit={(e)=>{
        let fd = new FormData(e.target);
        e.preventDefault();
        // for(let file of fd.values()){
        //   console.log(file)
        // }
          postMusicListAsync(fd)
        // api.music.addMusic()
        }} 
        encType="multipart/form-data">
        <input type="file" name="mp3" accept="audio/mp3"/>
        <button type='submit'>추가</button>
      </form>
      
    </>
  );
};

export default AddMusic;  