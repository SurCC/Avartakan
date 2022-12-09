import React from "react";
import "./MainPage.css";
import TwoSlideSwipers from "./TwoSlideSwipers/TwoSlideSwipers";
import Menu from "./Menu/Menu";

export default function MainPage() {
  return (
    <div>
        <TwoSlideSwipers />
        <Menu />
    </div>
  );
}
