import { React,useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box , IconButton, Drawer,List,ListItem} from "@mui/material";
import Search from "./Search";
import Buttons from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Styledheader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const Subimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const ButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));


const IconWrapper = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color:'inherit',
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
const Header = () => {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open,setOpen] = useState(false);

  const handleOpen =()=>{
    setOpen(true);
  }  
  const handleClose =()=>{
    setOpen(false);
  }
  const list =()=>(
        <Box style={{width:'200px'}} onClick={handleClose}>
            <List>
                <ListItem>
                <Buttons />
                </ListItem>
            </List>
        </Box>
  )
  return (
    <Styledheader>
      <Toolbar style={{ minHeight: "55px" }}>
        <IconWrapper onClick={handleOpen}>
          <MenuIcon />
        </IconWrapper>
        <Drawer open={open} onClose={handleClose}>
                {list()}
        </Drawer>
        <Component to="/">
          <img src={logoUrl} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
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
  );
};

export default Header;
