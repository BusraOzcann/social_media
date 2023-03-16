import "./register.css"

function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Sosyal Medya</h3>
                <span className="loginDesc"> Arkadaşlarınızı Sosyal Medya üzerinden bulun. </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Kullanıcı Adı" className="loginInput" />
                    <input placeholder="E-posta" className="loginInput" />
                    <input placeholder="Şifre" className="loginInput" />
                    <input placeholder="Şifre Tekrar" className="loginInput" />
                    <button className="loginButton">Kayıt Ol</button>
                    <button className="loginRegisterButton">Hesabın ile Giriş Yap</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register