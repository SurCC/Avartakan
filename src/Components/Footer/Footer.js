import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo2 from "../Images/Logo.png";
import VK from "./Images/vk.png";
import INST from "./Images/istagram.png";
import FB from "./Images/facebook.png";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const FooterLink = styled.a`
  color: #ffffff;
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  cursor: pointer;
  white-space: pre-wrap;
`;

const SocialMediaLink = styled.a``;

export default function Footer() {

  const { t } = useTranslation();

  return (
    <div className="footerContainer">
      <div className="onFooter">
        <div className="onFooterContent">
          <div>
            <Link to="/">
              <img src={Logo2} alt="Logo2" />
            </Link>
          </div>
          <div className="text">
            <div className="text1">
              <div className="text2">
                <div className="openTime">{t("footerText")}</div>
                <div className="number">+7 (495) 980 08 79</div>
                <div className="backCall">{t("footerText1")}</div>
              </div>
              <div className="mail">{t("footerText2")}</div>
            </div>
            <div className="redirections">
              <div className="flexOflogos">
                <div className="vkInstFbSearch">{t("footerText3")}</div>
                <div className="vkInstFb">
                  <SocialMediaLink href="https://vk.com">
                    <img src={VK} alt="VK" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.instagram.com">
                    <img src={INST} alt="INST" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.facebook.com/">
                    <img src={FB} alt="FB" />
                  </SocialMediaLink>
                </div>
              </div>
              <div>
                <div className="flexOflogos2">
                  <div className="payment">{t("footerText4")}</div>
                  <div className="visaMasterCard">
                    <div className="background1"></div>
                    <div className="background2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text3">
            <div>{t("footerText5")}</div>
            <FooterLink>{t("footerText6")}</FooterLink>
            <FooterLink>{t("footerText7")}</FooterLink>
            <FooterLink>{t("footerText8")}</FooterLink>
          </div>
          <div className="text3">
            <div>{t("footerText9")}</div>
            <FooterLink>{t("footerText10")}</FooterLink>
            <FooterLink>{t("footerText11")}</FooterLink>
            <FooterLink>{t("footerText12")}</FooterLink>
            <FooterLink>{t("footerText13")}</FooterLink>
            <FooterLink>{t("footerText14")}</FooterLink>
            <FooterLink>{t("footerText15")}</FooterLink>
          </div>
          <div className="text3">
            <div>{t("footerText16")}</div>
            <FooterLink>{t("footerText17")}</FooterLink>
            <FooterLink>{t("footerText18")}</FooterLink>
            <FooterLink>{t("footerText19")}</FooterLink>
          </div>
          <div className="text3">
            <div>{t("footerText20")}</div>
            <FooterLink>{t("footerText21")}</FooterLink>
            <FooterLink>{t("footerText22")}</FooterLink>
            <FooterLink>{t("footerText23")}</FooterLink>
            <FooterLink>{t("footerText24")}</FooterLink>
          </div>
        </div>
      </div>
      <div className="underFooter">
        <div className="containerOfUnderFooter">
          <div className="underFooterText1">
            <div className="decoLine">©2010-2017 Deco Line™</div>
            <div>{t("footerText25")}</div>
          </div>
          <div className="underFooterText2">{t("footerText26")}</div>
        </div>
      </div>
    </div>
  );
}
