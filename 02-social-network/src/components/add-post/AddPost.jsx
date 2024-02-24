import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import currentUser from "../../fake-apis/current-user";

import "./add-post.css";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function AddPost() {
  return (
    <form className="post-form">
      <div className="user form-top">
        <img src={currentUser.profileImage} alt="" />
        <input type="text" placeholder="What's on your mind?" />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>

      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file" />
          <span>
            <FontAwesomeIcon icon={faImage} /> Photos
          </span>
        </label>

        <label htmlFor="file">
          <input type="file" id="file" />
          <span>
            <FontAwesomeIcon icon={faVideo} /> Images
          </span>
        </label>

        <span>
          <FontAwesomeIcon icon={faTags} /> Tag
        </span>
        <span>
          <FontAwesomeIcon icon={faSmile} /> Feelings
        </span>
      </div>
    </form>
  );
}
