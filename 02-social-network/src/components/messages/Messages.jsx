import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";

import messages from "../../fake-apis/messages";

import "./messages.css";

export default function Messages() {
  return (
    <div className="messages">
      <div className="message-top">
        <h4>Messages</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>

      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search message" />
      </div>

      <hr />

      {messages.map((message) => (
        <Link key={message.id} to="chat-box/id">
          <div className="message">
            <div className="user">
              <img src={message.img} alt="" />
              <div className="green-active"></div>
            </div>

            <div className="message-body">
              <h5>{message.name}</h5>
              <p>{message.mText}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
