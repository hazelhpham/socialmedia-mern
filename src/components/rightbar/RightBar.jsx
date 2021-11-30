import React from "react";
import "./rightbar.css";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="birthday" />
          <span className="birthdayText">
            {" "}
            <b>Lien Nguyen </b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
