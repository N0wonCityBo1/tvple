import {Link} from "react-router-dom"
import {useState} from "react"
import style from "../css/Login.module.css"
import { numberVerification, registerToApi } from "../components/api"
import { NavBar } from "../components/navBar"



function UploadPage(){
    const [title, setTitle] = useState("");
    const [explain, setExplain] = useState("");
    const [username, setName] = useState("");
    const [number, setNumber] = useState("");
    const titleHandle = (event) => {
        setTitle(event.target.value)
    }
    const explainHandle = (event) => {
        setExplain(event.target.value)
    }
   

    return(
            <>
            <div style={style}>
                <div className={style.loginPage}>
                <div className={style.form}>
                    <div className={style.login}>
                        <div className={style.loginHeader}>
                            <h3>회원가입</h3>
                            <p>아이디를 입력해주세요. <br />비밀번호는 6자 이상 40자 이하이며 <br />하나 이상의 숫자 및 문자, 특수문자가 필요합니다</p>
                        </div>
                    </div>
                    <form className={style.loginForm} method="post" enctype="multipart/form-data" action="" >
                        <input 
                        type="text" 
                        placeholder="제목" 
                        value = {title}
                        onChange = {titleHandle}
                        name="title"/>
                        <input 
                        type="text" 
                        placeholder="설명"
                        value = {explain}
                        onChange={explainHandle}
                        name="explain"
                        />
                        <input type="file"
                        id="video" name="video"
                        >
                        파일업로드
                        </input>
                        
                        <button >업로드</button>
                    </form>
                    
                </div>
             </div>
        </div></>
    )
}

export default UploadPage;