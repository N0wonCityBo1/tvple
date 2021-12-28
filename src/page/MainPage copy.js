import React from "react";
import { NavBar } from "../components/navBar";
import { UnderBar } from "../components/underBar";
import { Videos } from "../components/video copy";


function MainPage() {
    return(
        <>
        <NavBar></NavBar>
        <Videos></Videos>
        <UnderBar></UnderBar>
        </>
    )
}

export default MainPage