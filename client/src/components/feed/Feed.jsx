import { useState, useEffect } from "react"
import axios from "axios"

import "./feed.css"
import { Posts } from "../../dummyData"

import Share from "../share/Share"
import Post from "../post/Post"

function Feed() {
  const [post, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8800/api/posts/timeline/6419eb86dea3f785e79b78b5")
      console.log({res})
    }

    fetchPosts()
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>

        {/* {Posts.map(p => (
          <Post key={p.id} post={p}/>
        ))} */}

      </div>
    </div>
  )
}

export default Feed