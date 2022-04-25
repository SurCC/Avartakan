import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SlideSwiperMiddle.css";

import LeftButton from "./Images/Chevron Left.png";
import RightButton from "./Images/Chevron Right.png";
import Icon from "./Images/Icon.png";
import Icon1 from "./Images/Icon1.png";
import Icon2 from "./Images/Icon2.png";
import Icon3 from "./Images/Icon3.png";

export default function SlideSwiperMiddle() {
  return (
    <div className="middleContainer">
      <div className="backgroundOfadvantages">
        <div className="advantages">Наши преимущества</div>
      </div>
      <div className="backgroundOfMiddle">
        {/* <div className="ellipse"><img src={LeftButton} alt="LeftButton" /></div> */}
        <div className="middliSwiperContainer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={15}
            slidesPerView={5}
            navigation={true}
            loop={true}
            className="middleSwiper"
          >
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon} alt="Icon" className="Icon" />
                <div className="HeaderOfSlides">Безопасные</div>
                <div className="textOfSlides">Панели изготавливаются из экологически чистых материалов, и совершенно безопасны</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon1} alt="Icon1" className="Icon" />
                <div className="HeaderOfSlides">100% Геометрия</div>
                <div className="textOfSlides">Панели Деко Лайн имеют 100% геометрию и проходят двухэтапную проверку качества</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon2} alt="Icon2" className="Icon" />
                <div className="HeaderOfSlides">Производство</div>
                <div className="textOfSlides">Деко Лайн - это крупное предприятие со своим производством в Зеленограде.</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon3} alt="Icon3" className="Icon" />
                <div className="HeaderOfSlides">Гарантия</div>
                <div className="textOfSlides">Все доставляемые панели застрахованы, некачественная продукция будет заменена</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon3} alt="Icon3" className="Icon" />
                <div className="HeaderOfSlides">Гармония</div>
                <div className="textOfSlides">Наши панели помогут создать уютную атмосферу в доме</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon3} alt="Icon3" className="Icon" />
                <div className="HeaderOfSlides">Для детей</div>
                <div className="textOfSlides">Наша продукция 100% безопасна для детей</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon3} alt="Icon3" className="Icon" />
                <div className="HeaderOfSlides">Новые технологии</div>
                <div className="textOfSlides">Современные технологии производства внедряемые нами увеличивают качество производимых нами товаров</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon2} alt="Icon2" className="Icon" />
                <div className="HeaderOfSlides">Эстетичный вид</div>
                <div className="textOfSlides">Наши панели для стен обеспечат объемные эффекты в интерьере</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon1} alt="Icon1" className="Icon" />
                <div className="HeaderOfSlides">Качество</div>
                <div className="textOfSlides">Мы гарантируем нашим клиентам неизменно высокое качество наших продуктов</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlidesOfMiddle">
                <img src={Icon} alt="Icon" className="Icon" />
                <div className="HeaderOfSlides">Пожаростойкость</div>
                <div className="textOfSlides">Наши панели демонстрируют высшую пожаростойкость и не восприимчивы к открытому огню</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="ellipse" aria-controls="swiper-wrapper-fdf1d810101bf1faf"><img src={RightButton} alt="RightButton" /></div> */}
      </div>
    </div>
  );
}
