import React from "react";
import Logo from "../Images/Logo.png";
import Vector2 from "./Images/Vector2.png";
import Shape from "./Images/Shape.png";
import Bascket from "./Images/Bascket.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

const LanguageButton = styled.button`
  color: ${({active})=>active?"#f8f3d5":"rgba(248, 243, 213, 0.5)"};
  font-weight: 600;
  font-size: 16px;
  background-color: #296a61;
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: 600;
`

export default function Header() {

  const {t, i18n} = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <nav className="header">
      <div className="frstCol">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="secondCol">
        <div className="higherRow">
          <div className="columnsOfFirstRow">
            <div className="lowGrayText">{t("headerText")}</div>
            <div className="tel">+7 (495) 980 08 79</div>
            <div className="callBack">{t("headerText1")}</div>
          </div>
          <div className="columnsOfFirstRow">
            <div className="lowGrayText">{t("headerText2")}</div>
            <div className="tel">+7 (985) 33 66 999</div>
          </div>
          <div className="rpOfFirstRow">
            <Link to="/payment">
              <button className="navButton">{t("headerText3")}</button>
            </Link>
            <div className="bascket">
              <Link to="/bascket">
                <img src={Bascket} alt="bascket" />
              </Link>
            </div>
            <div className="languageChanger">
              <LanguageButton active={i18n.language==='en'} onClick={()=>changeLanguage('en')}>
                ENG
                </LanguageButton>
              <div className="II">|</div>
              <LanguageButton active={i18n.language==='ru'} onClick={()=>changeLanguage('ru')}>
                РУС
                </LanguageButton>
            </div>
          </div>
        </div>
        <div className="lowerRow">
          <div>
            <Link to="/catalog" className="navBar">
              <div>{t("headerText4")}</div>
            </Link>
          </div>
          <div>
            <Link to="/gallery" className="navBar">
              <div>{t("headerText5")}</div>
            </Link>
          </div>
          <div>
            <Link to="/info" className="navBar">
              <div>{t("headerText6")}</div>
            </Link>
          </div>
          <div>
            <Link to="/about us" className="navBar">
              <div>{t("headerText7")}</div>
            </Link>
          </div>
          <div>
            <Link to="/partners" className="navBar">
              <div>{t("headerText8")}</div>
            </Link>
          </div>
          <div className="more">
            <Link to="/more" className="navBarOfMore">
              <div>{t("headerText9")}</div>
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
            <Link to="/search">
              <img src={Shape} alt="search" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
