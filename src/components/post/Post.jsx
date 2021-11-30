import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/1.jpeg" alt="" className="postTopLeftImg" />
            <span className="postUsername">Huong Pham</span>
            <span className="postDate">5 minutes</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {" "}
            Hello welcome to Viee Social Media Platform!{" "}
          </span>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F291411-city-urban-New_York_City-building-Empire_State_Building.jpg&f=1&nofb=1"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/like.png" alt="like icon" className="likeIcon" />
            <img
              src="./assets/heart.png"
              alt="heart icon"
              className="heartIcon"
            />
            <div className="postLikeCounter"> 32 people like this </div>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
