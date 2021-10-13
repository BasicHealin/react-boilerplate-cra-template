import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "GlobalStyle";
import Navigation from "Navigation";
import "i18n";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
