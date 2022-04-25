import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SlideSwiperTop.css";

import Wallpaper1 from "./Wallpapers/Wallpaper1.png";
import Wallpaper2 from "./Wallpapers/Wallpaper2.png";
import Wallpaper3 from "./Wallpapers/Wallpaper3.png";
import Wallpaper4 from "./Wallpapers/Wallpaper4.png";

export default function SlideSwiperTop() {
  return (
    <div className="topContainer">
      <div className="textOnSwiper">
        <div className="background">
          <div className="PM-22">РМ-22</div>
          <div className="Printografiya">/Принтография</div>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img src={Wallpaper1} className="Walpapers" alt="Wallpaper1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wallpaper2} className="Walpapers" alt="Wallpaper2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wallpaper3} className="Walpapers" alt="Wallpaper3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wallpaper4} className="Walpapers" alt="Wallpaper4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
