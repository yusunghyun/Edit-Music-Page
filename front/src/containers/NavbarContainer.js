import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {logoutAsync} from '../modules/auth'
import Navbar from '../components/Navbar'

const NavbarContainer = () => {
  const dispatch = useDispatch();

  const {accessToken} = useSelector(({auth})=>({accessToken:auth.accessToken}))
  return (
    <Navbar accessToken={accessToken} logoutAsync={()=>dispatch(logoutAsync())} />
  );
};

export default NavbarContainer;