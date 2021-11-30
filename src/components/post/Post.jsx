import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { User } from "../../dummyData";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked); //either the post is liked or not liked yet.
  };
  const user = User.filter((u) => u.id === 1);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={User.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postTopLeftImg"
            />
            <span className="postUsername">
              {/* !! important  */}
              {User.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post.desc} </span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/like.png"
              alt="like icon"
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src="./assets/heart.png"
              alt="heart icon"
              className="heartIcon"
              onClick={likeHandler}
            />
            <div className="postLikeCounter"> {like} people like this </div>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
