import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import SearchBar from "./SearchBar";

const pages = ["Home", "Movies", "Series"];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
      <Box>
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "#27272B", color: "#FFFFF" }}
        >
          <Toolbar>
            <IconButton
              component={Link}
              to="/"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#BD1E1E",
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <CottageIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="/movies"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#BD1E1E",
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <TheatersIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="/tv"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#BD1E1E",
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <TvIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="responsive-menu"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    component={Link}
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    component={Link}
                    to="/movies"
                    style={{ textDecoration: "none" }}
                  >
                    Movies
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    component={Link}
                    to="/tv"
                    style={{ textDecoration: "none" }}
                  >
                    Series
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBar;