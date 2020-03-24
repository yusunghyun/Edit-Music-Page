import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import MusicContainer from '../containers/MusicContainer';
import Search from './Search';
import AddMusic from './AddMusic';

const MusicPage = () => {
  return (
    <div>
      <NavbarContainer/>
      <MusicContainer/>
    </div>
  );
};

export default MusicPage;