import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div>
      <div className="topBarContainer">
        <div className="topBarLeft">
          <span className="topBarLogo"> Viee Social </span>
        </div>
        <div className="topBarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for a name .. "
              type="text"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarItem">Homepage</span>
            <span className="topBarItem">Timeline</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconsItem">
              <Person />
              <span className="topBarIconBadge"> 1 </span>
            </div>
            <div className="topBarIconsItem">
              <Chat />
              <span className="topBarIconBadge"> 2 </span>
            </div>
            <div className="topBarIconsItem">
              <Notifications />
              <span className="topBarIconBadge"> 3 </span>
            </div>
          </div>
          <img src="./assets/1.jpeg" alt="profile_pic" className="topBarImg" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
