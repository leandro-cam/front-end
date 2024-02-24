import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import currentUser from "../../../fake-apis/current-user";

export default function UserStory() {
  return (
    <div className="story user-story">
      <div className="user">
        <img src={currentUser.profileImage} alt="" />
      </div>
      <img src={currentUser.profileImage} alt="" />
      <label htmlFor="story-files">
        <FontAwesomeIcon icon={faAdd} />
        <input type="file" id="story-files" />
        <h5 className="add-story">Add story</h5>
      </label>
    </div>
  );
}
