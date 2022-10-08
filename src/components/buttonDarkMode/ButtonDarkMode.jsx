import React, { useContext } from "react";
import contextData from "../../context/contextData";
import sun from "../../asset/darkmode/sun.svg";
import moon from "../../asset/darkmode/moon.svg";
import "./buttonDarkMode.css";
export default function ButtonDarkMode() {
  const { isDarkMode, setDarkMode } = useContext(contextData);
  function onClickButton() {
    setDarkMode(isDarkMode ? false : true);
  }
  return (
    <div
      className={
        isDarkMode
          ? "backgroundDarkMode backgroundDarkModeChecked"
          : "backgroundDarkMode"
      }
      onClick={onClickButton}
    >
      <img src={sun} className="sun" alt="soleil" />
      <img src={moon} className="moon" alt="lune" />
      {isDarkMode}
    </div>
  );
}
