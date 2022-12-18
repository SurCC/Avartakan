import React from "react";
import { H1, H2 } from "../../distrib/StyledComponents/StyledComponentsH";
import CatalogImage from "./Images/CatalogImage.png";
import SmallSwiper from "../../distrib/SmallSwiper/SmallSwiper";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BodyOfCatalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding-top: 90px;
  padding-bottom: 90px;
`;

const UpperContainerOfCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContainerForImagesAndText = styled.div`
  display: flex;
  gap: 18px;
`;

const UpperContainerLinks = styled(Link)`
  position: relative;
`;

const StyledH2 = styled(H2)`
  position: absolute;
  top: 630px;
  width: 100%;
  text-align: center;
  &:hover {
    color: #fdf0a0;
  };
  white-space: pre-line;
`;

const LowerContainerOfCatalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export default function Catalog() {

  const { t } = useTranslation();

  return (
    <BodyOfCatalog>
      <UpperContainerOfCatalog>
        <H1 primary={true}>{t("catalogText")}</H1>
        <ContainerForImagesAndText>
          <UpperContainerLinks to="/info">
            <img src={CatalogImage} alt="CatalogImage" />
            <StyledH2>{t("catalogText1")}</StyledH2>
          </UpperContainerLinks>
          <UpperContainerLinks to="/info">
            <img src={CatalogImage} alt="CatalogImage1" />
            <StyledH2>{t("catalogText2")}</StyledH2>
          </UpperContainerLinks>
          <UpperContainerLinks to="/info">
            <img src={CatalogImage} alt="CatalogImage2" />
            <StyledH2>{t("catalogText3")}</StyledH2>
          </UpperContainerLinks>
        </ContainerForImagesAndText>
      </UpperContainerOfCatalog>
      <LowerContainerOfCatalog>
        <H2 primary={true}>{t("catalogText4")}</H2>
        <SmallSwiper></SmallSwiper>
      </LowerContainerOfCatalog>
    </BodyOfCatalog>
  );
}
