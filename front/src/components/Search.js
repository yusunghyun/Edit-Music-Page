import React, { useState } from 'react';
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  background:#495057;
  input{
      background: none;
      outline: none;
      border:none;
      padding:0.5rem;
      font-size:1.125rem;
      line-height: 1.5;
      color:white;
      &::placeholder{
          color:#dee2e6;
      }
      flex:1;
  }
  button{
      background:none;
      outline:none;
      border:none;
      background:#868e96;
      color:white;
      padding-left:1rem;
      padding-right:1rem;
      font-size:1.5rem;
      display:flex;
      align-items:center;
      cursor: pointer;
      transition: 0.1s background ease-in;
      &:hover{
          background:#adb5bd;
      }
  }
  `;


const Search = ({searchMusic,searchMusicAction}) => {
  const [search,setSearch] = useState('')
  return (
    <Form onSubmit={(e)=>{e.preventDefault();searchMusicAction(search)}}>
      <input placeholder='제목을 입력하세요' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button>검색</button>
    </Form>
  );
};

export default Search;