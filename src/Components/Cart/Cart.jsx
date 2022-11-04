import { Grid, Typography, Box, styled, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { payment } from "../../Service/api";
import { post } from "../../utils/Paytm";

const Component = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const BtnBox = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;
const Btn = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 50px;
  :hover {
    background: #fb641b;
    color: #fff;
  }
`;
const Wrapper = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      padding: '15px 0'
  }
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.Cart);
  //console.log(cartItems);
  const buyNow =async()=>{
    let response = await payment({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
  }
  return (
    <>
      {cartItems.length ? (
        <Wrapper container>
          <RightGrid item lg={9} md={9} sm={12} xs={12} >
            <Component>
              <Typography>My Cart({cartItems.length})</Typography>
            </Component>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <BtnBox>
              <Btn onClick={()=> buyNow()}>Place Order</Btn>
            </BtnBox>
          </RightGrid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Wrapper>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
