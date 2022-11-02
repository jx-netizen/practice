import React, { useState } from 'react'
import { Box,Typography,Menu,MenuItem,styled } from '@mui/material'
import PowerSettingNewIcon from "@mui/icons-material/PowerSettingsNew"

const Wrapper = styled(Menu)`
    margin-top: 5px
`
const Logout = styled(Typography)`
    font-size:14px;
    margin-left:10px
`

const Profile = ({account,setAccount}) => {
    
    const [open, setOpen] = useState(false);
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
    const handleClose =()=>{
        setOpen(false);
    }
    const userLogout =()=>{
        setAccount('');
    }
    
  return (
    <>
    <Box onClick={handleClick}>
    <Typography style={{marginTop:'2',cursor:'pointer',marginLeft:'0',marginRight:'0',fontWeight:'600'}}>{account}</Typography>
    </Box>
    <Wrapper
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
        <MenuItem onClick={()=>{handleClose(); userLogout();}}>
            <PowerSettingNewIcon color='primary' fontSize='small' />
            <Logout>Logout</Logout>
        </MenuItem>
      </Wrapper>
    </>
  )
}

export default Profile