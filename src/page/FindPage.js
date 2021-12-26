import style from "../css/Login.module.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import { ChangePwToApi, numberVerification, FindIdToApi } from "../components/api"
import { NavBar } from "../components/navBar"
const FindPage = () => {
    const [password, setPw] = useState("");
    const [whatFind, setFind] = useState("-1");
    const [number, setNumber] = useState("");
    const pwHandle = (event) => {
        setPw(event.target.value)
    }
    const numberHandle = (event) => {
        setNumber(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    const changeFind = (event) => {
        if(event.target.value === "-1"){
            setFind("-1")
        }
        if(event.target.value === "0"){
            setFind("0")
        }
        if(event.target.value === "1"){
            setFind("1")
        }
    }

    return(
        <>
        <NavBar/>
        
        <div style={style}>
            <div className={style.loginPage}>
            <div className={style.form}>
                <div className={style.login}>
                    <div className="login-header">
                        {whatFind === "-1" ? <h3>계정 설정 페이지</h3> : null}
                        {whatFind === "0" ? <h3>아이디 찾기</h3> : null}
                        {whatFind === "1" ? <h3>비밀번호 찾기</h3> : null}
                        <select onChange={changeFind}>
                            <option value="-1">원하시는 기능을 선택해주세요!</option>
                            <option value="0">아이디 찾기</option>
                            <option value="1">비밀번호 재설정</option>
                        </select>
                    </div>
                </div>
            <div/>
                {whatFind === "-1" ? <div>
                    <p className="message"><Link to={`/register`}>계정이 없으신가요?</Link></p>
                    <p className="message"><Link to={`/login`}>계정이 기억나시나요?</Link></p>
                </div>
                : whatFind === "0" ? 
                    <form onSubmit={onSubmit} className="login-form">
                    <input 
                        type="text" 
                        placeholder="전화번호"
                        value = {number}
                        onChange={numberHandle}
                        name="phoneNumber"
                    />
                    <button onClick={(event) => numberVerification(event, number)}>전화번호 인증</button>
                    <button onClick={(event) => FindIdToApi(event)}>아이디 찾기</button>
                    <p className="message"><Link to={`/register`}>계정이 없으신가요?</Link></p>
                    <p className="message"><Link to={`/login`}>계정이 기억나시나요?</Link></p>
                </form>
                :<form onSubmit={onSubmit} className="login-form">
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
                    onChange={pwHandle}
                    placeholder="비밀번호" 
                    name="password"/>
                    <button onClick={(event) => ChangePwToApi(event, password)}>비밀번호 재설정</button>
                    <p className="message"><Link to={`/register`}>계정이 없으신가요?</Link></p>
                    <p className="message"><Link to={`/login`}>계정이 기억나시나요?</Link></p>
                </form>}
                </div>
            </div>
        </div>
        </>
    )
}
export default FindPage;