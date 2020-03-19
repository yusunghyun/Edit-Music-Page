import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {logoutAsync,modalOpenAction,modalCloseAction,editPasswordAsync} from '../modules/auth'
import Navbar from '../components/Navbar'

const NavbarContainer = () => {
  const dispatch = useDispatch();

  const {isModal,accessToken} = useSelector(({auth})=>({accessToken:auth.accessToken,isModal:auth.isModal}))
  return (
    <Navbar
      accessToken={accessToken}
      logoutAsync={()=>dispatch(logoutAsync())}
      isModal={isModal}
      modalOpenAction={()=>dispatch(modalOpenAction())}
      modalCloseAction={()=>dispatch(modalCloseAction())}
      editPasswordAsync={(id,password)=>dispatch(editPasswordAsync(id,password))}
    />
  );
};

export default NavbarContainer;