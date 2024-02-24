import Stories from "../../components/stories/Stories";
import AddPost from "../../components/add-post/AddPost";
import Feeds from "../../components/feeds/Feeds";

export default function Home() {
  return (
    <div>
      <Stories />
      <AddPost />
      <Feeds />
    </div>
  );
}
