import style from "../css/Login.module.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import { setCookie } from "../components/cookie"
import { NavBar } from "../components/navBar"
const LoginPage = () => {
    const [id, setId] = useState("");
    const [password, setPw] = useState("");
    const idHandle = (event) => {
        setId(event.target.value)
    }
    const pwHandle = (event) => {
        setPw(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        loginToApi(id, password);
    }
    const loginToApi = async () => {
        const request = await fetch(`https://api.pukuba.dev/api/v1/auth/sign-in`, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify({
                "id" : id,
                "password" : password
            })
        })
        const result = await request.json() // result.user.id -> id, result.accesstoken -> token
        console.log(result)
        console.log(result.accessToken);
        setCookie(result.user.id, result.accessToken, 1);
    }
    return(
        <>
        <NavBar></NavBar>
        <div style={style}>
            <div className={style.loginPage}>
            <div className={style.form}>
                <div className={style.login}>
                    <div className="login-header">
                        <h3>로그인</h3>
                        <p>아이디를 입력해주세요</p>
                    </div>
                </div>
            <div/>
                <form onSubmit={onSubmit} className="login-form">
                    <input 
                    type="text" 
                    value={id}
                    onChange={idHandle}
                    placeholder="아이디" 
                    name="username"/>
                    <input 
                    type="password" 
                    value={password}
                    onChange={pwHandle}
                    placeholder="비밀번호" 
                    name="password"/>
                    <button>로그인</button>
                    <p className="message"><Link to={`/register`}>가입하지 않으셨나요?</Link></p>
                    <p className="message"><Link to={`/find`}>아이디 / 비밀번호 찾기</Link></p>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default LoginPage;