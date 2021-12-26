import React from "react";

import Video from '../components/videoView'
import { NavBar } from "../components/navBar";



function VideoPage ({link}){

return(
    <>
    <NavBar></NavBar>
    <Video link={link}></Video>
    </>
)

}

export default VideoPage;