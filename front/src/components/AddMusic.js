import React, { useEffect, useState } from 'react';
import * as api from '../lib/api'
import styled from 'styled-components';

const Form = styled.form`
  display:flex;
  align-items:center;
`;

const Div = styled.div`
  display:flex;
`;
const Div2 = styled.div`
  flex:1;
`;//.........

const AddBtn = styled.button`
  background:none;
  outline:none;
  border:none;
  background:#868e96;
  color:white;
  padding-left:1rem;
  padding-right:1rem;
  font-size:1rem;
  display:flex;
  align-items:center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover{
      background:#adb5bd;
  }
`;

const AddMusic = ({postMusicListAsync}) => {
  
  return (
    <Div>
      <Div2></Div2>
      <Form onSubmit={(e)=>{
        let fd = new FormData(e.target);
        e.preventDefault();
        postMusicListAsync(fd)
        }} 
        encType="multipart/form-data">
        <input type="file" name="mp3" accept="audio/mp3"/>
        <AddBtn type='submit'>추가</AddBtn>
      </Form>
      
    </Div>
  );
};

export default AddMusic;  