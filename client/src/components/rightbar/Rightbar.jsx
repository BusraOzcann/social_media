import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"
import { useContext, useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Add, Remove } from "@mui/icons-material"

function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([]);
  const {user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    console.log("followed : ", currentUser.followings.includes(user?._id))
    setFollowed(currentUser.followings.includes(user?._id))
  }, [currentUser, user])

  useEffect(() => {
    const getFriends = async() => {
      try{
        const friendList = await axios.get("http://localhost:8800/api/users/friends/"+user._id);
        setFriends(friendList.data);
      }catch(err){
        console.log(err)
      }
    }
    getFriends();
  }, [user])

  const followHandler = async(e) => {
    try{
      if(!followed){
        await axios.put("http://localhost:8800/api/users/" + user._id + "/follow", { userId: currentUser._id })
        dispatch({ type: "UNFOLLOW", payload: user._id })
        console.log("unfollow : ",{ currentUser })
      }else{
        await axios.put("http://localhost:8800/api/users/" + user._id + "/unfollow", { userId: currentUser._id })
        dispatch({ type: "FOLLOW", payload: user._id })
        console.log("follow : ", {currentUser})
      }
    }catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }

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
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={followHandler}>
            {followed ? "Takibi Bırak" : "Takip Et"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
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
          {friends.map(friend => (
            <Link to={"/profile/"+friend.username} style={{textDecoration: "none"}}>
              <div className="rightbarFollowing">
                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noavatar.svg"} className="rightbarFollowingImg" alt="" />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
          
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