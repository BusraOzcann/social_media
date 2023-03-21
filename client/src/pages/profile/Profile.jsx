import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                    <img className="profileUserImg" src={`${PF}post/7.jpeg`} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Büşra Özcan</h4>
                    <span className="profileInfoDesc">Bilgisayar Mühendisi</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile