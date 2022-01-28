import React, { useState } from "react";

import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";
import { lightTheme, darkTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

const ToggleTheme = styled.div``;

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <ToggleTheme>Theme</ToggleTheme>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
