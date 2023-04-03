import { useState, useEffect, useContext } from "react"
import axios from "axios"
import {format} from "timeago.js"
import { Link } from "react-router-dom"

import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext"

function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user: currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
          setUser(res.data);
        }
    
        fetchUser()
      }, [post.userId])

    const likeHandler = () => {
        try{
            axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
        }catch(err){
            
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                          <img className="postProfileImage" src={user.profilePicture ? PF + user.profilePicture : PF+"person/10.jpeg"} alt="" />
                    </Link>
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} kişi bunu beğendi</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {post.comment} Yorum
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post