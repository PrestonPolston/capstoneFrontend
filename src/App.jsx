import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import GetAllProducts from "./components/products/products";
import Login from "./components/login/login";
import NavBar from "./components/NavBar";
import AccountInfo from "./components/user/userInfo/AccountHome";
import SingleProduct from "./components/products/singleProductPage/SingleProduct";
import UserStepper from "./components/user/registerStepper/UserStepper";
import { useSelector } from "react-redux";
import CartIcon from "./components/cart/CartIcon";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/checkout/Checkout";
import UserInfo from "./components/user/userInfo/UserInfo";
import UpdateUser from "./components/user/userInfo/ChangeLogin";
import EditUserPreferences from "./components/user/userInfo/UserPreferences";
import FetchUserDataPage from "./components/login/FetchUserData";
import GetReviewByUser from "./components/user/userInfo/review/UserReviews";
import UserOrders from "./components/user/userInfo/UserOrders";
import GetProductsByClass from "./components/products/productsClass";
import AdminLanding from "./components/user/admin/AdminLanding";
import LandingPage from "./components/Landing";

function App() {
  const darkMode = useSelector((state) => state.theme.darkTheme);
  const userPreferences = useSelector(
    (state) => state.userPreferences?.userPreferences || state.userPreferences
  );

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: userPreferences?.primaryColor || "#1976d2",
      },
      background: {
        default: darkMode ? "#222" : userPreferences?.secondaryColor || "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#111",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    spacing: 8,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          paddingTop: "64px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<GetAllProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products/:classItem" element={<GetProductsByClass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserStepper />} />
          <Route path="/accountInfo" element={<AccountInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/updateLogin" element={<UpdateUser />} />
          <Route path="/editpreferences" element={<EditUserPreferences />} />
          <Route path="/fetchUserData" element={<FetchUserDataPage />} />
          <Route path="/getUserReview" element={<GetReviewByUser />} />
          <Route path="/getUserOrders" element={<UserOrders />} />
          <Route path="/adminLanding" element={<AdminLanding />} />
        </Routes>
        <CartIcon />
      </div>
    </ThemeProvider>
  );
}

export default App;
