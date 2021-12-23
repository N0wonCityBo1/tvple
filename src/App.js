import React from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navi} from './components/navBar'
import {UnderBar} from './components/underBar'
import {Videos} from './components/video'



function App() {
  return (
    <>
     <Navi></Navi>
     <Videos text='movie'></Videos>
      <UnderBar/>
     
   </>
  );
}

export default App;
