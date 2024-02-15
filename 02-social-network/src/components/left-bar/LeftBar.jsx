import { Link } from "react-router-dom";

import friendIcon from "../../assets/icons/1.png";
import groupsIcon from "../../assets/icons/2.png";
import marketIcon from "../../assets/icons/3.png";
import watchIcon from "../../assets/icons/4.png";
import galleryIcon from "../../assets/icons/5.png";
import videosIcon from "../../assets/icons/6.png";
import messageIcon from "../../assets/icons/7.png";

import Item from "./item/Item";
import User from "../user/User";

import currentUser from "../../fake-apis/current-user";

import "./left-bar.css";

export default function LeftBar() {
  return (
    <div className="left-bar">
      <div className="left-container">
        <div className="menu">
          <Link to="/profile/id">
            <User
              src={currentUser.profileImage}
              alt=""
              userName={currentUser.name}
            />
          </Link>

          <Item to="/" src={friendIcon} alt="" title="Friends" />
          <Item to="/" src={groupsIcon} alt="" title="Groups" />
          <Item to="/" src={marketIcon} alt="" title="Market" />
          <Item to="/" className="item" src={watchIcon} alt="" title="Watch" />
          <Item to="/" src={galleryIcon} alt="" title="Gallery" />
          <Item to="/" src={videosIcon} alt="" title="Videos" />
          <Item to="/" src={messageIcon} alt="" title="Message" />
        </div>

        <hr />

        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>

          <Item to="/" src={galleryIcon} alt="" title="Gallery" />
          <Item to="/" src={videosIcon} alt="" title="Videos" />
          <Item to="/chat-box/id" src={messageIcon} alt="" title="Message" />
        </div>
      </div>
    </div>
  );
}
