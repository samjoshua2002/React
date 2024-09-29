import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // Sets the element to which the menu should anchor
    setOpenMenu(true); // Opens the menu
  };

  const handleMenuClose = () => {
    setOpenMenu(false); // Closes the menu
    setAnchorEl(null); // Clears the anchor element
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    color: "black",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const Userbox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Instagram
        </Typography>
        <InstagramIcon sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          <InputBase placeholder="Search....." />
        </Search>
        <Icons>
        <Badge  color="error">
            <HomeIcon/>
          </Badge>
          <Badge  color="error">
            <SearchIcon/>
          </Badge>
          <Badge badgeContent={24} color="error">
            <OfflineBoltIcon/>
          </Badge>
          
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://i.pinimg.com/736x/54/45/e2/5445e275012b2d82d09a425efc4a543a.jpg"
            onClick={handleAvatarClick}
          />
        </Icons>
        <Userbox onClick={handleAvatarClick}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://i.pinimg.com/736x/0b/e1/f6/0be1f6c9e01998ddec7441e5007fe64a.jpg"
          />
          <Typography>Sam Joshua</Typography>
        </Userbox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose} 
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Nav;
