import "./profile.css"
import {useState, useEffect} from "react"
import axios from "axios"
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import {useParams} from "react-router"

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username // route'da bulunan parametreleri almak için. Link ile yönlendirirken buraya username parametresi gönderiyoruz!

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/users?username=${username}`)
      setUser(res.data);
    }

    fetchUser()
  }, [username])

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src={user.coverPicture || PF+"person/background.jpg"} alt="" />
                    <img className="profileUserImg" src={user.profilePicture || PF+"person/noavatar.svg"} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile