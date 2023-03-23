import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            Bugün <b>Begüm Yetişkin</b> ve <b>2 diğer kişinin</b> doğum günü.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" /> 
        <h4 className="rightbarTitle">Çevrimiçi Arkadaşlar</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Kullanıcı Açıklama</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Şehir :</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Doğum Yeri :</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Medeni Durumu :</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? 'Single' : user.relationship === 2 ? "Married" : "Empty"}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Arkadaşlar</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" className="rightbarFollowingImg" alt="" />
            <span className="rightbarFollowingName">begüm yetişkin</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar