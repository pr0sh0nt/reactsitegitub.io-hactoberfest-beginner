import { useEffect, useState } from "react";
import getVariableCss from "../tools/getVariableCss";
const ChangeDarkMode = () => {
  const defaultDarkMode = false;
  const [isDarkMode, setDarkMode] = useState(defaultDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode + "");
    if (isDarkMode) {
      // dark
      document.documentElement.style.setProperty(
        "--background-color",
        getVariableCss("--background-color-dark")
      );
      document.documentElement.style.setProperty(
        "--color-text",
        getVariableCss("--color-text-dark")
      );
    } else {
      // light
      document.documentElement.style.setProperty(
        "--background-color",
        getVariableCss("--background-color-light")
      );
      document.documentElement.style.setProperty(
        "--color-text",
        getVariableCss("--color-text-light")
      );
    }
  }, [isDarkMode]);

  return { isDarkMode, setDarkMode };
};

export default ChangeDarkMode;
