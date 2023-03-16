import "./feed.css"
import { Posts } from "../../dummyData"

import Share from "../share/Share"
import Post from "../post/Post"

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>

        {Posts.map(p => (
          <Post key={p.id} post={p}/>
        ))}

      </div>
    </div>
  )
}

export default Feed