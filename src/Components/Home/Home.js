import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProduct } from "../../Redux/Action/productActions";
import { useDispatch, useSelector } from "react-redux";
import MidSlide from "./MidSlide";
import MidSection from "./MideSection";

const Component = styled(Box)`
  padding: 10px;
  background-color: #f3f3f3;
`;

const Home = () => {
  let { products } = useSelector((state) => state.getProducts);

  //console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
      <MidSlide data={products} title="Deal of the Day" timer={true} />
      <MidSection />
      <Slide data={products} title="Discount for You" timer={false} />
      <Slide data={products} title="Trending Offer" timer={false} />
      <Slide data={products} title="Top Selection" timer={false} />
      <Slide data={products} title="Reccomended Item" timer={false} />
    </>
  );
};

export default Home;
