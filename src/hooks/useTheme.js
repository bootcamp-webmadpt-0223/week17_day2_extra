import { useState } from "react";

const themes = {
  dark: { background: "black" },
  light: { background: "white" }
};

export default () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = newTheme => {
    console.log(`Changing theme to: ${newTheme}`);
    setTheme(newTheme);
  };
  return { theme, changeTheme };
};
