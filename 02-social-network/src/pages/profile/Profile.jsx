import UserProfile from "../../components/user-profile/UserProfile";
import AddPost from "../../components/add-post/AddPost";
import Feeds from "../../components/feeds/Feeds";

export default function Profile() {
  return (
    <>
      <UserProfile />
      <AddPost />
      <Feeds />
    </>
  );
}
