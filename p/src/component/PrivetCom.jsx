import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivetCom = () => {

  const isauth = localStorage.getItem('user'); 

  return <Outlet />; 
 
};

export default PrivetCom;
