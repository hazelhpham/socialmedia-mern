import React from "react";
import "./rightbar.css";
import { User } from "../../dummyData";
import Online from "../online/Online";
const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="birthday" />
          <span className="birthdayText">
            {" "}
            <b>Lien Nguyen </b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {User.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return <h1>hey its profile!</h1>;
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* show birthdays of accounts        */}
        {/* <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="birthday" />
          <span className="birthdayText">
            {" "}
            <b>Lien Nguyen </b> and <b>2 other friends</b> have a birthday today
          </span>
        </div> */}
        {/* the ads  */}

        {/* online list friend */}

        {/* hard code for UI for creating user online  */}
        {/* <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img src="./assets/4.jpeg" alt="" className="rightbarFriendImg" />

              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername"> Caitlyn Toan</span>
          </li> */}
      </div>
    </div>
  );
};

export default RightBar;
