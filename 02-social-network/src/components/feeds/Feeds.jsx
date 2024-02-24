import Feed from "./feed/Feed";

import feeds from "../../fake-apis/feeds";

import "./feeds.css";

export default function Feeds() {
  return (
    <div className="feeds">
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
}
