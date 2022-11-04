import { Box, Typography, styled } from "@mui/material";
import { React, useState, useEffect } from "react";

const Wrapper = styled(Box)`
  padding: 15px 22px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
const Header = styled(Typography)`
  color: #878787;
`;
const Component = styled(Box)`
  padding: 15px 22px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;
const Price = styled(Box)`
  float: right;
`;

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.product.price.mrp;
      discount += item.product.price.mrp - item.product.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <Box>
      <Wrapper>
        <Header> PRICE DETAILS</Header>
      </Wrapper>
      <Component>
        <Typography>
          Price({cartItems?.length}) item
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹60</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + 60}</Price>
        </Typography>
        <Discount>You will save {discount - 60} on this order.</Discount>
      </Component>
    </Box>
  );
};

export default TotalView;
