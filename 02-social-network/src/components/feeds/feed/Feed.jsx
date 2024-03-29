import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faListDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import Comments from "../../comments/Comments";

export default function Feed({ feed }) {
  const [openComment, setOpenComment] = useState(false);
  const commentHandler = () => {
    setOpenComment(!openComment);
  };

  return (
    <div className="feed">
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            <img src={feed.feedProfile} alt="" />
            <div>
              <h5>{feed.name}</h5>
              <small>1 minute ago</small>
            </div>
          </div>
        </Link>

        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>

      <div className="mid-content">
        <p>{feed.desc}</p>
        <img src={feed.feedImage} alt="" />
      </div>

      <div className="bottom-content">
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faHeart} /> 14 likes
          </span>
        </div>

        <div className="action-item" onClick={commentHandler}>
          <span>
            <FontAwesomeIcon icon={faComment} /> 2 comments
          </span>
        </div>

        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} /> 1 share
          </span>
        </div>
      </div>

      {openComment && <Comments />}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};
