import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  School,
  Group,
  Bookmark,
  HelpOutline,
  Mail,
  WorkOutline,
  Camera,
  Event,
} from "@material-ui/icons";
import { User } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
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
            <Mail className="sidebarIcon" />
            <span className="sideBarListItemText"> Chats </span>
          </li>

          <li className="sidebarListItem">
            <Camera className="sidebarIcon" />
            <span className="sideBarListItemText"> Videos </span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sideBarListItemText"> Groups </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sideBarListItemText"> Bookmarks </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sideBarListItemText"> Questions </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sideBarListItemText"> Jobs </span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sideBarListItemText"> Events </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sideBarListItemText"> Courses </span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {User.map((u) => (
            <CloseFriend user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
