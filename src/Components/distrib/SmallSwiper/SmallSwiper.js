import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SmallSwiper.css";
import styled from "@emotion/styled";

import LeftButton from "./Images/Chevron Left.png";
import RightButton from "./Images/Chevron Right.png";
import Icon from "./Images/Icon.png";
import Icon1 from "./Images/Icon1.png";
import Icon2 from "./Images/Icon2.png";
import Icon3 from "./Images/Icon3.png";
import { t } from "i18next";

const BackgroundOfMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MiddliSwiperContainer = styled.div`
  width: 1520px;
  padding-left: 74px;
  padding-right: 74px;
`;

const SwiperSlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 328px;
  background-color: #4f8d85;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

const SwiperLink = styled(Link)`
  text-decoration: none;
  color: #f8f3d5;
`;

const ParentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ChildBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Image = styled.img`
  width: 74px;
`;

const UpperText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
`;

const LowerText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  white-space: pre-line;
`;

export default function SmallSwiper() {
  return (
    <BackgroundOfMiddle>
      {/* <div className="ellipse"><img src={LeftButton} alt="LeftButton" /></div> */}
      <MiddliSwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={5}
          navigation={true}
          loop={true}
        >
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon} alt="Icon" />
                    <UpperText>{t("smallSwiperText")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText1")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon1} alt="Icon1" />
                    <UpperText>{t("smallSwiperText2")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText3")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon2} alt="Icon2" />
                    <UpperText>{t("smallSwiperText4")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText5")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon3} alt="Icon3" />
                    <UpperText>{t("smallSwiperText6")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText7")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon3} alt="Icon3" />
                    <UpperText>{t("smallSwiperText8")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText9")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon3} alt="Icon3" />
                    <UpperText>{t("smallSwiperText10")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText11")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon3} alt="Icon3" />
                    <UpperText>{t("smallSwiperText12")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText13")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon1} alt="Icon1" />
                    <UpperText>{t("smallSwiperText14")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText15")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon2} alt="Icon2" />
                    <UpperText>{t("smallSwiperText16")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText17")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContainer>
              <SwiperLink to="/info">
                <ParentBox>
                  <ChildBox>
                    <Image src={Icon} alt="Icon" />
                    <UpperText>{t("smallSwiperText18")}</UpperText>
                  </ChildBox>
                  <LowerText>{t("smallSwiperText19")}</LowerText>
                </ParentBox>
              </SwiperLink>
            </SwiperSlideContainer>
          </SwiperSlide>
        </Swiper>
      </MiddliSwiperContainer>
      {/* <div className="ellipse" aria-controls="swiper-wrapper-fdf1d810101bf1faf"><img src={RightButton} alt="RightButton" /></div> */}
    </BackgroundOfMiddle>
  );
}
