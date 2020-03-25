import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components'

const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  background:#ff6b6b;
  color:white;
  cursor:pointer;
  &:hover{
      color:#ff8787;
  }
`;
const EditBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  background:#22b8cf;
  color:white;
  cursor:pointer;
  &:hover{
      color:#22b8ef;
  }
`;
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')


const EditMusic = ({ele,getMusicListAsync,updateMusicListAsync,deleteMusicListAsync}) => {

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const [editTitle,setEditTitle] = useState(ele.title)
  const [editArtist,setEditArtist] = useState(ele.artist)
  const [editAlbum,setEditAlbum] = useState(ele.album)
  const [editTrack,setEditTrack] = useState(ele.track)

  return (
    <>
     <EditBtn onClick={openModal}>수정</EditBtn>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Emit Music Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>음원 수정</h2>
          <form onSubmit={(e)=>{e.preventDefault(); updateMusicListAsync({id:ele.id,title:editTitle,artist:editArtist,album:editAlbum,track:editTrack});closeModal()}}>
            <div>title : <input value={editTitle} onChange={e=>{setEditTitle(e.target.value)}}/></div>
            <div>artist : <input value={editArtist} onChange={e=>{setEditArtist(e.target.value)}}/></div>
            <div>album : <input value={editAlbum} onChange={e=>{setEditAlbum(e.target.value)}}/></div>
            <div>track : <input value={editTrack} onChange={e=>{setEditTrack(e.target.value)}}/></div>
            
            
            <button type='submit'>저장</button>
          </form>
          <button onClick={closeModal}>닫기</button>
        </Modal>
    
    <RemoveBtn onClick={()=>{
      deleteMusicListAsync({id:ele.id})
      }}>
      삭제
    </RemoveBtn>
    </>
  );
};

export default EditMusic;