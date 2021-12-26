import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Video from './components/videoView';
import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage';
import Find from './page/FindPage';
import RegisterPage from './page/RegisterPage';
import VideoPage from './page/VideoPage';
import UploadPage from './page/UploadPage';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/video' element={<VideoPage link={'https://youtu.be/V7gjxv7ZrdY'}/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/find' element={<Find/>}></Route>
      <Route path='/upload' element={<UploadPage/>}></Route>
    </Routes>
   
    
     
   </>
  );
}

export default App;
