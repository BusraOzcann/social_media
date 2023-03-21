import "./closeFriend.css"

function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
        <li className="sidebarFriend">
            <img className="sidebarFriendImage" src={PF + user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriend