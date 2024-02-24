import { Swiper, SwiperSlide } from "swiper/react";

import UserStory from "./user-story/UserStory";

import stories from "../../fake-apis/stories";

import "swiper/css";
import "./stories.css";

export default function Stories() {
  return (
    <div className="stories">
      <UserStory />

      <Swiper style={{ width: "80%" }} slidesPerView={4} spaceBetween={10}>
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="story">
              <div className="user">
                <img src={story.storyProfile} alt="" />
              </div>
              <img src={story.story} alt="" />
              <h5 className="name">{story.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
