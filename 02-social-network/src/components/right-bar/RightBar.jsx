import Messages from "../messages/Messages";
import FriendRequests from "../friend-requests/FriendRequests";

import "./right-bar.css";

export default function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-bar-container">
        <Messages />
        <FriendRequests />
      </div>
    </div>
  );
}
