import React from "react";
import "./Menu.css";
import Data from "./data";
import { Link } from "react-router-dom";
import i18n from "../../../../i18n";
import { t } from "i18next";

export default function Menu() {
  return (
    <div className="menu">
      <div className="insideData">
        {Data.map((insideData) => (
          <div className="containerOfMenu" key={insideData.index}>
            <div className="insideContainerOfMenu">
              <div className="insideDataFirstHeaderAndTopSales">
                <div
                  className={
                    (insideData.index < 2 && "insideDataHeader") ||
                    (insideData.index > 2 && "insideDataHeader3") ||
                    "insideDataHeader2"
                  }
                >
                  {insideData.name[i18n.language]}
                </div>
                {insideData.topSales && (
                  <div className="topSales">
                    {insideData.topSales[i18n.language]}
                  </div>
                )}
              </div>
              <div className="firstRowOfInsideData">
                {insideData.list.map(
                  (insideDataMenu) =>
                    insideDataMenu.index <= 6 && (
                      <div key={insideDataMenu.index} className="slideOfitem">
                        <img
                          src={insideDataMenu.imgSrc}
                          alt="insideDataMenuImage"
                        ></img>
                        <div
                          className={
                            insideDataMenu.index % 2 !== 0
                              ? `containerOfNameSizeAndPrice`
                              : `containerOfNameSizeAndPriceTop`
                          }
                        >
                          <div className="nameOfItem">
                            {insideDataMenu.name}
                          </div>
                          <div className="sizeAndPrice">
                            <div className="sizeOfItem">
                              {insideDataMenu.size[i18n.language]}
                            </div>
                            <div className="priceOfItem">
                              {insideDataMenu.price[i18n.language]}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="secondRowOfInsideData">
                {insideData.list.map(
                  (insideDataMenu) =>
                    insideDataMenu.index > 6 && (
                      <div key={insideDataMenu.index} className="slideOfitem">
                        <img
                          src={insideDataMenu.imgSrc}
                          alt="insideDataMenuImage"
                        ></img>
                        <div className="containerOfNameSizeAndPrice">
                          <div className="nameOfItem">
                            {insideDataMenu.name}
                          </div>
                          <div className="sizeAndPrice">
                            <div className="sizeOfItem">
                              {insideDataMenu.size[i18n.language]}
                            </div>
                            <div className="priceOfItem">
                              {insideDataMenu.price[i18n.language]}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="moreOfBarelief">
              <Link to="./more">
                <button className="moreButtonOfbarelief">
                  {t("menuText")}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
