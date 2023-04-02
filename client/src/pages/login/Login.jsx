import "./login.css"
import {useRef, useContext} from "react"

import { LoginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const progressStyle = {position: "relative", zIndex: 99, color: "white"}

    const handleClick = (e) => {
        e.preventDefault();
        LoginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    console.log(user);

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Sosyal Medya</h3>
                <span className="loginDesc"> Arkadaşlarınızı Sosyal Medya üzerinden bulun. </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="E-posta" type="email" required className="loginInput" ref={email}/>
                    <input placeholder="Şifre" type="password" required minLength="6" className="loginInput" ref={password}/>
                    <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress size={20} style={progressStyle} /> : "Giriş Yap"}</button>
                    <span className="loginForgot">Şifremi Unuttum</span>
                    <button className="loginRegisterButton" disabled={isFetching}>{isFetching ? <CircularProgress size={20} style={progressStyle} /> : "Yeni Hesap Oluştur"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login