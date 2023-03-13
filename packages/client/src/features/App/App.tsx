import React from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "@features/Dashboard";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
