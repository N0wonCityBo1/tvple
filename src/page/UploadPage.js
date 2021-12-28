import style from "../css/Upload.module.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import {uploadToApi} from "../components/api"
import { NavBar } from "../components/navBar"

export default function UplaodPage()  {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [video, setVideo] = useState("");
    const titleHandle = (event) => {
        setTitle(event.target.value)
    }
    const descHandle = (event) => {
        setDesc(event.target.value)
    }
    const videoHandle = (event) => {
        setVideo(event.target.value)
    }
    
    return(
        <>
        <NavBar/>
        <div style={style}>
            <div className={style.loginPage}>
            <div className={style.form}>
                <div className={style.login}>
                    <div className="login-header">
                        <h3>영상 업로드</h3>
                    </div>
                </div>
            <div/>
                <form  className="login-form" encType="multipart/form-data" action="http://localhost:3000/main">
                    <input 
                    type="text" 
                    value={title}
                    onChange={titleHandle}
                    placeholder="제목" 
                    name="title"/>
                    <input 
                    type="text" 
                    value={desc}
                    onChange={descHandle}
                    placeholder="영상 설명" 
                    name="desc"/>
                    <input 
                    type="file" 
                    value={video}
                    onChange={videoHandle}
                    accept=".mp4, .mp3"
                    name="video"/>
                    <button type="submit">업로드</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
