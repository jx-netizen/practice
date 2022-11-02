import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./Context/DataProvider";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import ProductDetail from "./Components/Details/ProductDetail";
import Cart from "./Components/Cart/Cart"

const App = () => {
  return (
    <>
      <DataProvider >
        <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route exact path="/" element ={<Home />}></Route>
            <Route exact path="/product/:id" element ={<ProductDetail />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
