import React from "react";
import "./sidebar.css";
import { RssFeed } from "@material-ui/icons";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="slideBarWrapper">
        <ul className="sideBarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Feed </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Chats </span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Videos </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Groups </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Bookmarks </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Questions </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Jobs </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Events </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideBarListItemText"> Courses </span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sideBar" />
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sideBar" />
          </li>

          <li className="sidebarFriend">
            <img src="/assets/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Huong Pham</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
