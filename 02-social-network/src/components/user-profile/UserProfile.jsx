import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";

import currentUser from "../../fake-apis/current-user";

import "./user-profile.css";

export default function UserProfile() {
  return (
    <div className="user-profile">
      <div className="cover-photo">
        <img src={currentUser.coverPhoto} alt="" />
      </div>

      <div className="profile-info">
        <img src={currentUser.profileImage} alt="" />

        <div className="user-name">
          <h3>{currentUser.name}</h3>
          <h5>{currentUser.username}</h5>
        </div>

        <div className="profile-buttons">
          <Link to="/chat-box/id">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>

          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFeed} /> Follow me
          </button>

          <button className="btn">
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>

        <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates quod esse itaque possimus illo quasi.
        </p>
      </div>
    </div>
  );
}
