import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

import Stories from "../../components/stories/Stories";

import currentUser from "../../fake-apis/current-user";

import "./chat-box.css";

export default function ChatBox() {
  return (
    <div>
      <Stories />

      <div className="chat-box">
        <div className="chat-box-top">
          <img src={currentUser.profileImage} alt="" />

          <div className="user-name">
            <h3>{currentUser.name}</h3>
            <h5>{currentUser.username}</h5>
          </div>
        </div>

        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder="Write something" />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label className="btn btn-primary" htmlFor="chat-box-file">
              <FontAwesomeIcon icon={faFileAlt} />
              <input type="file" id="chat-box-file" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
