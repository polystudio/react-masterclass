import { RecoilRoot } from "recoil";
import React from "react";

import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";
import { darkTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
