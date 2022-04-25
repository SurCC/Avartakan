import React from "react";
import "./MainPage.css";
import SlideSwiperTop from "./SlideSwiperTop/SlideSwiperTop";
import SlideSwiperMiddle from "./SlideSwiperMiddle/SlideSwiperMiddle";
import Menu from "./Menu/Menu";

export default function MainPage() {
  return (
    <div className="Main">
      <div className="bodyOfMain">
        <SlideSwiperTop />
        <SlideSwiperMiddle />
      </div>
      <Menu />
    </div>
  );
}
