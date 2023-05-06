import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import GlobalFont from "./styles/GlobalFont.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.colors.purple,
            colorSuccess: theme.colors.success,
            colorError: theme.colors.failure,
            colorInfo: theme.colors.update,
            fontFamily: "Kanit-Medium",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
