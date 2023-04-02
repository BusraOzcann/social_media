import {useRef} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./register.css"

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Şifreler Uyuşmuyor!")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try{
                await axios.post("http://localhost:8800/api/auth/register", user);
                navigate("/login")
            }catch(err){
                console.log(err)
            }
        }
        
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Sosyal Medya</h3>
                <span className="loginDesc"> Arkadaşlarınızı Sosyal Medya üzerinden bulun. </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Kullanıcı Adı" required ref={username} className="loginInput" />
                    <input placeholder="E-posta" type="email" required ref={email} className="loginInput" />
                    <input placeholder="Şifre" minLength={6} type="password" required ref={password} className="loginInput" />
                    <input placeholder="Şifre Tekrar" type="password" required ref={passwordAgain} className="loginInput" />
                    <button className="loginButton" type="submit">Kayıt Ol</button>
                    <button className="loginRegisterButton">Hesabın ile Giriş Yap</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register