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
import SelectedCart from "./Component/SelectedCart/SelectedCart";
import Checkout from "./Component/Checkout/Checkout";
import ProtectedRoutes from "./Routes/ProtectedRoute";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
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
          <Route
            path="/cart"
            element={
              <Layout>
                <SelectedCart />
              </Layout>
            }
          />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/product/:id"
              element={
                <Layout>
                  <DetailPage />
                </Layout>
              }
            />

            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
