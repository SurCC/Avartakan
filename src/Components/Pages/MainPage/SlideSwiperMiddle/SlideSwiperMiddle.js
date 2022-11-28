import React from "react";
import "./SlideSwiperMiddle.css";
import SmallSwiper from "../../../distrib/SmallSwiper/SmallSwiper";

export default function SlideSwiperMiddle() {
  return (
    <div className="middleContainer">
      <div className="backgroundOfadvantages">
        <div className="advantages">Наши преимущества</div>
      </div>
      <SmallSwiper />
    </div>
  );
}
