import React, { useState } from "react";

import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

// const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

const ToggleTheme = styled.div``;

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToggleTheme>Theme</ToggleTheme>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
