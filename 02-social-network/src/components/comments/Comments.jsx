import { Link } from "react-router-dom";

import comments from "../../fake-apis/comments";
import currentUser from "../../fake-apis/current-user";

import "./comments.css";

export default function Comments() {
  return (
    <div className="comments">
      <div className="write-box">
        <form action="#">
          <div className="user">
            <img src={currentUser.profileImage} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>

      {comments.map((comment) => (
        <Link key={comment.id} to="/profile/id">
          <div className="user">
            <img src={comment.commentProfile} alt="" />
            <div className="info">
              <div className="name-and-time-ago">
                <h5>{comment.name}</h5>
                <small>1h ago</small>
              </div>
              <p>{comment.commentText}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
