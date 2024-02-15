import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import User from "../user/User";

import currentUser from "../../fake-apis/current-user";

import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">Social Network</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="nav-search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>

        <div className="nav-right">
          <Link to="/chat-box/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBars} />
          </Link>

          <User
            src={currentUser.profileImage}
            alt=""
            userName={currentUser.name}
          />
        </div>
      </div>
    </nav>
  );
}
