import "./closeFriend.css"

function CloseFriend({user}) {
  return (
    <div>
        <li className="sidebarFriend">
            <img className="sidebarFriendImage" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriend