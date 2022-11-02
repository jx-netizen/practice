import {React, useState} from "react";
import { Button, Box, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import { useNavigate } from "react-router-dom";
import {addToCart} from "../../Redux/Action/cartActions";
import { useDispatch } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
const Image = styled("img")`
  padding: 15px;
  width:90%;
`;
const CartButton = styled(Button)(({theme})=>({
    width:'48%',
  height: '50px',
  borderRadius: '2px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}))

const ActionItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = product.product;

  const addTocart = ()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }
  return (
    <>
      <Wrapper>
        <Box style={{ padding: '15px 20px',border: '1px solid #f0f0f0'}}>
            <Image src={product.product.detailUrl} alt="img" />
        </Box>
        <CartButton variant="contained" onClick={()=>addTocart()} style={{marginRight:10,background:'#ff9f00'}}><ShoppingCartIcon />Add to Cart</CartButton>
        <CartButton variant="contained" style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</CartButton>
      </Wrapper>
    </>
  );
};

export default ActionItem;
