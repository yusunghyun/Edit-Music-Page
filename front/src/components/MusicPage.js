import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import MusicContainer from '../containers/MusicContainer';
import Search from './Search';
import AddMusic from './AddMusic';
import styled from 'styled-components'

const Template = styled.div`
  width:1024px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius:4px;
  overflow: hidden;
  background: white;

`;

const MusicPage = () => {
  return (
    <div>
      <NavbarContainer/>
      <Template>
      <MusicContainer/>
      </Template>
    </div>
  );
};

export default MusicPage;