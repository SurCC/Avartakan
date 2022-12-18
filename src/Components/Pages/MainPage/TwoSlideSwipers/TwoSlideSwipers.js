import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TwoSlideSwipers.css";
import { H1, H2 } from "../../../distrib/StyledComponents/StyledComponentsH";
import styled from "@emotion/styled";
import SmallSwiper from "../../../distrib/SmallSwiper/SmallSwiper";

import Wallpaper1 from "./Wallpapers/Wallpaper1.png";
import Wallpaper2 from "./Wallpapers/Wallpaper2.png";
import Wallpaper3 from "./Wallpapers/Wallpaper3.png";
import Wallpaper4 from "./Wallpapers/Wallpaper4.png";
import { useTranslation } from "react-i18next";

const StyledH1 = styled(H1)`
  color: #ffbc24;
`;

const StyledH2 = styled(H2)`
  padding-top: 98px;
`;

const ContainerOfSmallSwiper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: #296a61;
`;

const UnderSmallSwiper = styled.div`
  width: 100%;
  height: 135px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0px;
`;


export default function TwoSlideSwipers() {

  const { t } = useTranslation();

  return (
    <div className="topContainer">
      <div className="textOnSwiper">
        <div className="background">
          <StyledH1>PM-22</StyledH1>
          <H1>{t("twoSwiperText")}</H1>
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
      <ContainerOfSmallSwiper>
        <StyledH2>{t("twoSwiperText1")}</StyledH2>
        <SmallSwiper />
        <UnderSmallSwiper></UnderSmallSwiper>
      </ContainerOfSmallSwiper>
    </div>
  );
}
