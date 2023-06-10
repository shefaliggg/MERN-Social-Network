import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Switch, ToggleButton, Toolbar, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from "react";

function Navbar() {

   const [Open, setOpen] = useState(false);

  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0px 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
  }));

  const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
  }));

  const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
  }));

  return (
    <AppBar position="sticky">
      <StyleToolbar>
      <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          My Social Network
        </Typography>
        <Search><InputBase placeholder="search something"/></Search>
        <Icons>
            <Badge badgeContent={4} color="error">
                <MailOutlineIcon/>
            </Badge>
            <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon/>
            </Badge>
            <Avatar onClick={(e)=> setOpen(true)} sx={{width:24 , height:24}}/>
        </Icons>
        <UserBox onClick={(e)=> setOpen(true)}>
            <Avatar sx={{width:24 , height:24}}/> 
            <Typography variant="span">
                Shefali Gajbhiye
            </Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>

      </Menu>
    </AppBar>
  );
}

export default Navbar;
