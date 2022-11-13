import React from "react";
import "./Footer.css";
import Logo2 from "../Images/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="onFooter">
        <div>
          <Link to="./home">
            <img src={Logo2} alt="Logo2" />
          </Link>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="underFooter">
        <div className="containerOfUnderFooter">
          <div className="underFooterText1">
          <div className="decoLine">©2010-2017 Deco Line™</div>
          <div>Официальный сайт</div>
          </div>
          <div className="underFooterText2">
            <div>
              Все материалы данного сайта являются объектами авторского права.
              Запрещается копирование, распространение или
            </div>
            <div>любое иное использование информации и объектов.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
