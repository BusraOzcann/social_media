import "./login.css"

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Sosyal Medya</h3>
                <span className="loginDesc"> Arkadaşlarınızı Sosyal Medya üzerinden bulun. </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="E-posta" className="loginInput" />
                    <input placeholder="Şifre" className="loginInput" />
                    <button className="loginButton">Giriş Yap</button>
                    <span className="loginForgot">Şifremi Unuttum</span>
                    <button className="loginRegisterButton">Yeni Hesap Oluştur</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login