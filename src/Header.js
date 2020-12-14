import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://static.toiimg.com/photo/58623495.cms"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputbtn" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Biplab Acharya"
          src="https://avatars1.githubusercontent.com/u/42872095?s=460&u=7a06f3ddd3b8d248a0bb65dbcda13d08297b02df&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
