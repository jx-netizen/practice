import React from 'react'
import { AppBar, Toolbar, styled,Typography, Box} from '@mui/material'
import Search from './Search'
import Buttons from './Button'


const Styledheader = styled(AppBar)`
background:#2874f0;
height:55px;
`
const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`
const Subheading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const Subimage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
})

const ButtonWrapper = styled(Box)`
    margin: 0 3% 0 auto ;
`

const Header = () => {
    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (

        <Styledheader>
            <Toolbar style={{minHeight:'55px'}}>
                <Component>
                    <img src={logoUrl} alt='logo' style={{width: 75}}/>
                    <Box style={{display: 'flex'}}>
                        <Subheading>Explore&nbsp;
                            <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </Subheading>
                        <Subimage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <ButtonWrapper>
                    <Buttons />
                </ButtonWrapper>

            </Toolbar>
        </Styledheader>
    
  )
}

export default Header