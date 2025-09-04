import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

import Home from "./Component/Home/Home";
import Layout from "./assets/Layout/Layout";
import DetailPage from "./Component/DetailPage/DetailPage";
import SignIn from "./Component/Login/Login";
import FavouritesItems from "./Component/FavouritesItems/FavouritesItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Routes wrapped in Layout */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <SignIn />
              </Layout>
            }
          />
          <Route
            path="/favouritesItems"
            element={
              <Layout>
                <FavouritesItems />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
