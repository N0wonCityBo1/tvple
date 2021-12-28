import axios from "axios"
import {setCookie} from "./cookie"
let verifyToken;

export const loginToApi = async (id, password) => { // 로그인
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

export const uploadToApi = async (video,title,desc) => { // 로그인
    const request = await fetch(`https://api.pukuba.dev/api/v1/media/upload`, {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            "file" : video,
            "title" : title,
            "description" : desc
        })
    })
    const result = await request.json() // result.user.id -> id, result.accesstoken -> token
    console.log(result)
    
   
}

export const numberVerification = async (event, number) => { // 인증번호 전송
    event.preventDefault();
    console.log(number)
    const response = await fetch("https://api.pukuba.dev/api/v1/auth/code", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            phoneNumber: number,
        }),
    })
    let verificationCode = prompt("발송 받으신 코드를 입력해 주세요.")
    verifyCheck(number, verificationCode)
 }
 
export const verifyCheck = async (number, verificationCode) => {  // 인증번호 입력후 토큰 발급
    console.log("starting Check!!")
    console.log(number)
    console.log(verificationCode)
    try {
        //응답 성공
        const response = await axios.get('https://api.pukuba.dev/api/v1/auth/code', {
            params: {
                "phoneNumber": number,
                "verificationCode" : verificationCode
            }
        });
        console.log(response)
        console.log(response.data.verificationToken)
        verifyToken = response.data.verificationToken
      } catch (error) {
        //응답 실패
        console.error(error);
      }
}

export const ChangePwToApi = async (event, password) => { // 비번 변경 api 요청
    console.log("We Will change the PW..")
    event.preventDefault();
    const request = await fetch("https://api.pukuba.dev/api/v1/auth/password", {
        method:'PATCH',
        headers:{
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            "verificationToken": verifyToken,
            "password" : password,
        })
    })
    if(request.ok === true){
        alert("비밀번호 변경에 성공했습니다.")
        window.location.href='/login'
    }
    else{
        alert("비밀번호 변경에 실패했습니다.")
    }
}

export const FindIdToApi = async (event) => {
        event.preventDefault()
        const response = await axios.get('https://api.pukuba.dev/api/v1/auth/id', {
            params: {
                "verificationToken" : verifyToken,
            }
        });
        console.log(response)
        alert(response.data.message)
        if(response.data.status === "ok"){
            return true;
        }
        else{
            alert(response.data.message)
            return false;
        }
}

export const registerToApi = async (event, id, username, number, password) => { // 회원가입 api 요청
    console.log("We will register you..")
    console.log(id,username,number,password)
    event.preventDefault();
    const request = await fetch("https://api.pukuba.dev/api/v1/auth/sign-up", {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            "id" : id,
            "username" : username,
            "phoneNumber" : number,
            "password" : password,
            "verificationToken": verifyToken
        })
    })
    console.log(request)
    console.log(request.ok)
    if(request.ok === true){
        alert("회원가입에 성공했습니다.")
        window.location.href='/login'
    }
    else{
        alert("회원가입에 실패했습니다.")
    }
}
