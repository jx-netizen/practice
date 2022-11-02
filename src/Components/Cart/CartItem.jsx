import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/commonUtils";
import CartButton from "./CartButton";

const Wrapper = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
`;
const LeftWrapper = styled(Box)`
  margin: 20px;
  display:flex;
  flex-direction:column;
`;
const RetailerText = styled(Typography)`
  color: #878787;
  margin-top: 10;
  font-size: 14px;
`;
const RemoveBtn = styled(Button)`
margin-top: 30px;
font-size:16px;
font-weight: 600;
color: #000;
`

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <img src={item.product.url} alt="cartImg" style={{height:110,width:110}}/>
          <CartButton />
        </LeftWrapper>
        <Box style={{margin:'20px'}}>
          <Typography>{item.product.title.longTitle}</Typography>
          <RetailerText>
            SuperComNet
            <Box component="span">
              <img
                src={fassured}
                alt="fassured"
                style={{ width: 50, marginLeft: 10 }}
              />
            </Box>
          </RetailerText>
          <Typography style={{ margin: "20px 0" }}>
            <Box
              component="span"
              style={{ fontWeight: "600", fontSize: "18px" }}
            >
              ₹{item.product.price.cost}
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#878787" }}>
              <strike>₹{item.product.price.mrp}</strike>
            </Box>
            &nbsp;&nbsp;
            <Box component="span" style={{ color: "#388e3c" }}>
              {item.product.price.discount}off
            </Box>
          </Typography>
          <RemoveBtn>Remove</RemoveBtn>
        </Box>
      </Wrapper>
    </>
  );
};

export default CartItem;
