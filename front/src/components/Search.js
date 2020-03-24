import React, { useState } from 'react';

const Search = ({searchMusic,searchMusicAction}) => {
  const [search,setSearch] = useState('')
  return (
    <form onSubmit={(e)=>{e.preventDefault();searchMusicAction(search)}}>
      <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button>검색</button>
    </form>
  );
};

export default Search;