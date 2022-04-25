import React from "react";
import Logo from "./Images/Logo.png";
import Vector2 from "./Images/Vector2.png";
import Shape from "./Images/Shape.png";
import Bascket from "./Images/Bascket.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="frstCol">
        <Link to="./home">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="secondCol">
        <div className="higherRow">
          <div className="columnsOfFirstRow">
            <div className="lowGrayText">Ежедневно с 9:00 до 20:00</div>
            <div className="tel">+7 (495) 980 08 79</div>
            <div className="callBack">Обратный звонок</div>
          </div>
          <div className="columnsOfFirstRow">
            <div className="lowGrayText">Есть вопросы? Звоните!</div>
            <div className="tel">+7 (985) 33 66 999</div>
          </div>
          <div className="rpOfFirstRow">
            <Link to="./payment">
              <button className="navButton">Доставка и оплата</button>
            </Link>
            <div className="bascket">
              <Link to="./bascket">
                <img src={Bascket} alt="bascket" />
              </Link>
            </div>
            <div className="languageChanger">
              <div className="EnRus">ENG</div>
              <div className="II">|</div>
              <div className="EnRus">РУС</div>
            </div>
          </div>
        </div>
        <div className="lowerRow">
          <div>
            <Link to="./menu" className="navBar">
              <div>Каталог</div>
            </Link>
          </div>
          <div>
            <Link to="./gallery" className="navBar">
              <div>Галерея</div>
            </Link>
          </div>
          <div>
            <Link to="./info" className="navBar">
              <div>Информация</div>
            </Link>
          </div>
          <div>
            <Link to="./about us" className="navBar">
              <div>О компании</div>
            </Link>
          </div>
          <div>
            <Link to="./partners" className="navBar">
              <div>Партнерам</div>
            </Link>
          </div>
          <div className="more">
            <Link to="./more" className="navBarOfMore">
              <div>Больше</div>
              <div className="arrow">
                <img src={Vector2} alt="arrowofMore" />
                <div className="subMenuOfMore">
                  <div>Something</div>
                  <div>Something</div>
                  <div>Something</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="search">
            <Link to="./search">
              <img src={Shape} alt="search" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
