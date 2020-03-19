import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import Search from './Search';
import MusicList from './MusicList';
import AddMusic from './AddMusic';

const MusicPage = () => {
  return (
    <div>
      <NavbarContainer/>
      뮤직페이지
      <Search/>
      <MusicList/>
      <AddMusic/>
    </div>
  );
};

export default MusicPage;