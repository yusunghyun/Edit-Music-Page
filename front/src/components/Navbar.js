import React from 'react';
import styled from 'styled-components'
import Responsive from './common/Responsive'
import Button from './common/Button'
import {withRouter} from 'react-router-dom'
import PasswordModal from './PasswordModal';

const HeaderBlock = styled.div`
  position:fixed;
  width:100%;
  background:white;
  box-shadow:0px 2px 4px rgba(0,0,0,0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: #22b8cf;
  }
  .right{
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = ({logoutAsync,history,isModal,modalOpenAction,modalCloseAction,editPasswordAsync}) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className='logo'>음악 편집 페이지</div>
          <div className='right2'><PasswordModal
            modalOpenAction={modalOpenAction}
            modalCloseAction={modalCloseAction}
            isModal={isModal}
            editPasswordAsync={editPasswordAsync}
          /></div>
          <div className='right'><Button onClick={()=>{
            logoutAsync()
            history.push('/login')
            }}>로그아웃</Button></div>
        </Wrapper>
      </HeaderBlock>
      <Spacer/>
    </>
  );
};

export default withRouter(Navbar);