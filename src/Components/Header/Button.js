import React from 'react'
import {useState} from "react"; 
import { Box, Typography, styled, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';

const Wrapperbox = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p , & > div {
        margin-right : 35px;
        font-size : 16px;
        align-items: center;
    }
`
const Buttonwrapper = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    font-weight: 600;
    text-transform: none;
    padding: 8px 40px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px; 
    :hover {
        color: #fff;
    }
    
`


const Buttons = () => {

    const [open,setOpen] = useState(false);
    const OpenDialog = () =>{
        setOpen(true);
    }

  return (
    <Wrapperbox>
        <Buttonwrapper variant="contained" onClick={()=>OpenDialog()}>Login</Buttonwrapper>
        <Typography style={{width:'135%'}}>Become a Seller</Typography>
        <Typography>More</Typography>

        <Box style={{display:'flex'}}>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Box>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapperbox>
    
  )
}

export default Buttons