import {Link} from "react-router-dom"
import {useState} from "react"
import style from "../css/Login.module.css"
import { numberVerification, registerToApi } from "../components/api"
import { NavBar } from "../components/navBar"

const RegisterPage = () =>{
    const [id, setId] = useState("");
    const [password, setPw] = useState("");
    const [username, setName] = useState("");
    const [number, setNumber] = useState("");
    const idHandle = (event) => {
        setId(event.target.value)
    }
    const pwHandle = (event) => {
        setPw(event.target.value)
    }
    const nameHandle = (event) => {
        setName(event.target.value)
    }
    const numberHandle = (event) => {
        setNumber(event.target.value)
    }

    return(
        <>
        <NavBar/>
        <div style={style}>
                <div className={style.loginPage}>
                <div className={style.form}>
                    <div className={style.login}>
                        <div className={style.loginHeader}>
                            <h3>회원가입</h3>
                            <p>아이디를 입력해주세요. <br />비밀번호는 6자 이상 40자 이하이며 <br />하나 이상의 숫자 및 문자, 특수문자가 필요합니다</p>
                        </div>
                    </div>
                    <form className={style.loginForm} method="post" action="">
                        <input 
                        type="text" 
                        placeholder="아이디" 
                        value = {id}
                        onChange = {idHandle}
                        name="username"/>
                        <input 
                        type="text" 
                        placeholder="전화번호"
                        value = {number}
                        onChange={numberHandle}
                        name="phoneNumber"
                        />
                        <button onClick={(event) => numberVerification(event, number)}>전화번호 인증</button> 
                        <input 
                        type="password" 
                        value={password}
                        placeholder="비밀번호"
                        onChange={pwHandle} 
                        name="password1"/>
                        <input 
                        type="text"
                        value={username}
                        onChange={nameHandle}
                        placeholder="닉네임" />
                        <button onClick={(event) => registerToApi(event, id, username, number, password)}>회원가입</button>
                    </form>
                    <p className="message">계정이 있으신가요? <Link to={`/login`}>로그인하세요!</Link></p>
                    <p className="message"><Link to={`/find`}>아이디 / 비밀번호 찾기</Link></p>
                </div>
             </div>
        </div>
        </>
    )
}
export default RegisterPage;