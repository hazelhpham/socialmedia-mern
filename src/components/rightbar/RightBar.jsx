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
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Hanoi, Vietnam </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single </span>
          </div>
          <h4 className="rightbarTitle"> User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Miu </span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <ProfileRightBar />
        <HomeRightBar /> */}

        {profile ? <ProfileRightBar /> : <HomeRightBar />}

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
