import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivetCom = () => {

  const isauth = localStorage.getItem('user'); 

  if (!isauth) {
    return <h1>You need to login first!</h1>;
  }

  return <Outlet />; 
};

export default PrivetCom;
