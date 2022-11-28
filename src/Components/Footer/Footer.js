import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo2 from "../Images/Logo.png";
import VK from "./Images/vk.png";
import INST from "./Images/istagram.png";
import FB from "./Images/facebook.png";
import styled from "@emotion/styled";

/*${props => props.primary?`#FFFFFF`:`red`};*/
const FooterLink = styled.a`
  color: #ffffff;
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  cursor: pointer;
  white-space: pre-wrap;
`;

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="onFooter">
        <div className="onFooterContent">
          <div>
            <Link to="./home">
              <img src={Logo2} alt="Logo2" />
            </Link>
          </div>
          <div className="text">
            <div className="text1">
              <div className="text2">
                <div className="openTime">Ежедневно с 9:00 до 20:00</div>
                <div className="number">+7 (495) 980 08 79</div>
                <div className="backCall">Обратный звонок</div>
              </div>
              <div className="mail">info@decoproduct.ru - по всем вопросам</div>
            </div>
            <div className="redirections">
              <div className="flexOflogos">
                <div className="vkInstFbSearch">Ищите нас здесь:</div>
                <div className="vkInstFb">
                  <img src={VK} alt="VK" />
                  <img src={INST} alt="INST" />
                  <img src={FB} alt="FB" />
                </div>
              </div>
              <div>
                <div className="flexOflogos2">
                  <div className="payment">Оплата по:</div>
                  <div className="visaMasterCard">
                    <div className="background1"></div>
                    <div className="background2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text3">
            <div>О компании</div>
            <FooterLink>О компании</FooterLink>
            {/* primary={true} */}
            <FooterLink>Контакты</FooterLink>
            <FooterLink>Галерея</FooterLink>
          </div>
          <div className="text3">
            <div>Информация</div>
            <FooterLink>Доставка и оплата</FooterLink>
            <FooterLink>Гарантия и возврат</FooterLink>
            <FooterLink>Производство</FooterLink>
            <FooterLink>Монтаж 3Д панелей</FooterLink>
            <FooterLink>
              Стеновые панели оптом - <br />
              купить от производителя
            </FooterLink>
            <FooterLink>Мы на ТВ</FooterLink>
          </div>
          <div className="text3">
            <div>Партнерам</div>
            <FooterLink>Строительным организациям</FooterLink>
            <FooterLink>Дизайнерам</FooterLink>
            <FooterLink>Дилерам</FooterLink>
          </div>
          <div className="text3">
            <div>Продукты</div>
            <FooterLink>Барельеф</FooterLink>
            <FooterLink>Принтография</FooterLink>
            <FooterLink>Гипсовые 3D панели</FooterLink>
            <FooterLink>Дизайн линия</FooterLink>
          </div>
        </div>
      </div>
      <div className="underFooter">
        <div className="containerOfUnderFooter">
          <div className="underFooterText1">
            <div className="decoLine">©2010-2017 Deco Line™</div>
            <div>Официальный сайт</div>
          </div>
          <div className="underFooterText2">
            Все материалы данного сайта являются объектами авторского права.
            Запрещается копирование, распространение или <br /> любое иное
            использование информации и объектов.
          </div>
        </div>
      </div>
    </div>
  );
}
