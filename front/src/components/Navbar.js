import React from 'react';
import styled from 'styled-components'
import Responsive from './common/Responsive'
import Button from './common/Button'
import {withRouter} from 'react-router-dom'

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
  }
  .right{
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = ({logoutAsync,history}) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className='logo'>음악 편집 페이지</div>
          <div className='right2'><Button>비밀번호 변경</Button></div>
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