import React from 'react'
import {useState, useContext} from "react"; 
import { Box, Typography, styled, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';

const Wrapperbox = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '0 5% 0 auto',
    cursor:'pointer',
    '& > & button, & p,&div' :{
        marginRight : '35px !important',
        fontSize : '16px',
        alignItems: 'center',
    },
    [theme.breakpoints.down("md")]: {
        display: "block",
      },
}));
const Buttonwrapper = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    font-weight: 600;
    text-transform: none;
    padding: 8px 40px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px; 
    margin-right: 10px;
    :hover {
        color: #fff;
    }
    
`


const Buttons = () => {

    const [open,setOpen] = useState(false);
    const {account,setAccount} = useContext(DataContext);
    const OpenDialog = () =>{
        setOpen(true);
    }

  return (
    <Wrapperbox>
        {
            account ? <Profile account={account} setAccount={setAccount}/>
            :
            <Buttonwrapper variant="contained" onClick={()=>OpenDialog()}>Login</Buttonwrapper>
        }
        {/* <Buttonwrapper variant="contained" onClick={()=>OpenDialog()}>Login</Buttonwrapper> */}
        <Typography style={{width:'135%',marginTop:'2'}}>Become a Seller</Typography>
        <Typography>More</Typography>

        <Box style={{display:'flex',marginTop:'2'}}>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Box>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapperbox>
    
  )
}

export default Buttons