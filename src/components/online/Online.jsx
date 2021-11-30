import React from "react";
import "./online.css";
const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarFriendImg" />

        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername"> {user.username}</span>
    </li>
  );
};

export default Online;
