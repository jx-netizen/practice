import { Grid, Typography ,Box,styled} from '@mui/material';
import React from 'react'
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';

const Wrapper = styled(Grid)`
  padding:30px 135px;
`
const Component = styled(Box)`
  padding: 15px 24px;
`


const Cart = () => {
  const {cartItems} = useSelector(state =>state.Cart);
  const data = cartItems.product;
  console.log(data);  
  return (
    <>
    {
      cartItems.length ?
      <Wrapper container>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Component>
            <Typography>My Cart({cartItems.length})</Typography>
          </Component>
          {
            cartItems.map(item =>(
              <CartItem item={item}/>
            ))
          }

        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView />
        </Grid>

      </Wrapper>
      :
      <div>Empty</div>
    }
    </>
  )
}

export default Cart