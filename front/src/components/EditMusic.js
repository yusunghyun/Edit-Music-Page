import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
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
     <button onClick={openModal}>수정</button>
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
    
    <button onClick={()=>{
      deleteMusicListAsync({id:ele.id})
      }}>
      삭제
    </button>
    </>
  );
};

export default EditMusic;