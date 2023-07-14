import "./post.css"
import {MoreVert} from '@material-ui/icons';
import {Users} from "../../dummyData"
import { useState } from "react";

function Post({post}) {
  // Using use state hook to set like increment and decrement likes
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)  
  }

  return (
    <div className="postContainer">
      <div className="postWrapper">

        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                <span className="postDate"> {post.date} </span>
            </div>
            <div className="postRight">
                <MoreVert/>
            </div>
        </div>

        <div className="postCenter">
          {/*  '?' is used when presence of an item in the array is not compulsory */}
            <span className="postText"> {post?.desc} </span>  
            <img src={post.photo} alt="" className="postImage" />
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" onClick = {likeHandler}/>
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">{like} liked your post</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div> 

      </div>
    </div>
  )
}

export default Post
