import React from 'react';
import Navbar from '../component/Navbar';
import Jumbotron from '../component/Jumbotron';
import LazFlash from '../component/LazFlash';

export default function Home() {
  return (
    <>
    	<Navbar />
      <Jumbotron />
      <LazFlash />
    </>
  )
}