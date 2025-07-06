import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Box = () => {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#555",
    color: theme === "light" ? "#000" : "#fff",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "8px"
  };

  return <div style={boxStyle}>Box Component: Theme is {theme}</div>;
};

export default Box;
