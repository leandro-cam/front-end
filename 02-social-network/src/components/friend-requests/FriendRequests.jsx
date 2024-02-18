import { Link } from "react-router-dom";

import friendRequests from "../../fake-apis/friends";

import "./friend-requests.css";

export default function FriendRequests() {
  return (
    <div className="friend-request-container">
      <h4>Friend Requests</h4>

      {friendRequests.map((request) => (
        <div key={request.id} className="friend-request">
          <Link to="/profile/id">
            <div className="person">
              <div className="user">
                <img src={request.img} alt="" />
                <h5>{request.name}</h5>
              </div>

              <div className="info">
                <p>{request.info}</p>
              </div>
            </div>

            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-red">Reject</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
