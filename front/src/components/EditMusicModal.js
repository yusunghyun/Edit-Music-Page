import React from 'react';

const EditMusicModal = ({id,getMusicListAsync,updateMusicListAsync,deleteMusicListAsync}) => {
  return (
    <>
    <button>
      수정
    </button>
    <button onClick={()=>{
      deleteMusicListAsync({id})
      }}>
      삭제
    </button>
    </>
  );
};

export default EditMusicModal;