import { useState, useEffect } from "react"
import axios from "axios"

import "./feed.css"
import { Posts } from "../../dummyData"

import Share from "../share/Share"
import Post from "../post/Post"

function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("http://localhost:8800/api/posts/profile/" + username) : await axios.get("http://localhost:8800/api/posts/timeline/6419eb86dea3f785e79b78b5")
      setPosts(res.data);
    }

    fetchPosts()
  }, [username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>

        {posts.map(p => (
          <Post key={p._id} post={p}/>
        ))}

      </div>
    </div>
  )
}

export default Feed