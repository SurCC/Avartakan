import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import Logo2 from "../Images/Logo.png";
import VK from "./Images/vk.png";
import INST from "./Images/istagram.png";
import FB from "./Images/facebook.png";
import Visa from "./Images/visa.png";
import MasterCard from "./Images/mastercard.png";

const FooterContainer = styled.div``;

const UpperFooter = styled.div`
  width: 100%;
  height: 271px;
  background-color: #296a61;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UpperFooterContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const LinkOfLogo = styled.div``;

const Images = styled.img``;

const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FirstRowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const OpenTime = styled.div`
  color: #f3efda;
  font-weight: 350;
  font-size: 12px;
  line-height: 14.4px;
`;

const TelNumber = styled.div`
  color: #ffbc24;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
`;

const CallBack = styled.div`
  color: #ffbc24;
  font-weight: 350;
  font-size: 10px;
  line-height: 12px;
`;

const Email = styled.div`
  color: #ffbc24;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.41px;
`;

const Redirections = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const FlexOflogos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextOfLogos = styled.div`
  color: #f3efda;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.41px;
`;

const VkInstFbVsiaMasterCard = styled.div`
  display: flex;
  gap: 10px;
`;

const BackgroundOfCards = styled.div`
  background-image: url(${Visa});
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  height: 24px;
  width: 47px;
  border-radius: 2px;
`;

const BackgroundOfCardsSecond = styled(BackgroundOfCards)`
  background-image: url(${MasterCard});
  width: 40px;
`;

const OtherColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OtherColumnsFirstChilds = styled.div`
  color: #ffbc24;
  font-weight: 600;
  font-size: 13px;
  line-height: 15.6px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  cursor: pointer;
  white-space: pre-wrap;
  &:hover {
    color: #fdf0a0;
  }
`;

const SocialMediaLink = styled.a`
`;

const UnderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #10443d;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
`;

const ContainerOfUnderFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 43px;
`;

const UnderFooterFirstColumn = styled.div`
  display: flex;
  gap: 5px;
`;

const DecoLine = styled.div`
  font-weight: 100;
  white-space: pre-line;
`;

const OficialSite = styled.div`
`;

const UnderFooterSecondColumn = styled.div`
  text-align: center;
  white-space: pre-line;
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <UpperFooter>
        <UpperFooterContent>
          <LinkOfLogo>
            <Link to="/">
              <Images src={Logo2} alt="Logo2" />
            </Link>
          </LinkOfLogo>
          <FirstCol>
            <FirstRow>
              <FirstRowContent>
                <OpenTime>{t("footerText")}</OpenTime>
                <TelNumber>+7 (495) 980 08 79</TelNumber>
                <CallBack>{t("footerText1")}</CallBack>
              </FirstRowContent>
              <Email>{t("footerText2")}</Email>
            </FirstRow>
            <Redirections>
              <FlexOflogos>
                <TextOfLogos>{t("footerText3")}</TextOfLogos>
                <VkInstFbVsiaMasterCard>
                  <SocialMediaLink href="https://vk.com">
                    <Images src={VK} alt="VK" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.instagram.com">
                    <Images src={INST} alt="INST" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.facebook.com/">
                    <Images src={FB} alt="FB" />
                  </SocialMediaLink>
                </VkInstFbVsiaMasterCard>
              </FlexOflogos>
              <div>
                <FlexOflogos>
                  <TextOfLogos>{t("footerText4")}</TextOfLogos>
                  <VkInstFbVsiaMasterCard>
                    <BackgroundOfCards></BackgroundOfCards>
                    <BackgroundOfCardsSecond></BackgroundOfCardsSecond>
                  </VkInstFbVsiaMasterCard>
                </FlexOflogos>
              </div>
            </Redirections>
          </FirstCol>
          <OtherColumns>
            <OtherColumnsFirstChilds>
              {t("footerText5")}
            </OtherColumnsFirstChilds>
            <FooterLink>{t("footerText6")}</FooterLink>
            <FooterLink>{t("footerText7")}</FooterLink>
            <FooterLink>{t("footerText8")}</FooterLink>
          </OtherColumns>
          <OtherColumns>
            <OtherColumnsFirstChilds>
              {t("footerText9")}
            </OtherColumnsFirstChilds>
            <FooterLink>{t("footerText10")}</FooterLink>
            <FooterLink>{t("footerText11")}</FooterLink>
            <FooterLink>{t("footerText12")}</FooterLink>
            <FooterLink>{t("footerText13")}</FooterLink>
            <FooterLink>{t("footerText14")}</FooterLink>
            <FooterLink>{t("footerText15")}</FooterLink>
          </OtherColumns>
          <OtherColumns>
            <OtherColumnsFirstChilds>
              {t("footerText16")}
            </OtherColumnsFirstChilds>
            <FooterLink>{t("footerText17")}</FooterLink>
            <FooterLink>{t("footerText18")}</FooterLink>
            <FooterLink>{t("footerText19")}</FooterLink>
          </OtherColumns>
          <OtherColumns>
            <OtherColumnsFirstChilds>
              {t("footerText20")}
            </OtherColumnsFirstChilds>
            <FooterLink>{t("footerText21")}</FooterLink>
            <FooterLink>{t("footerText22")}</FooterLink>
            <FooterLink>{t("footerText23")}</FooterLink>
            <FooterLink>{t("footerText24")}</FooterLink>
          </OtherColumns>
        </UpperFooterContent>
      </UpperFooter>
      <UnderFooter>
        <ContainerOfUnderFooter>
          <UnderFooterFirstColumn>
            <DecoLine>©2010-2017 Deco Line™</DecoLine>
            <OficialSite>{t("footerText25")}</OficialSite>
          </UnderFooterFirstColumn>
          <UnderFooterSecondColumn>{t("footerText26")}</UnderFooterSecondColumn>
        </ContainerOfUnderFooter>
      </UnderFooter>
    </FooterContainer>
  );
}
