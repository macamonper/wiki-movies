import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import SearchBar from "./SearchBar";
import Home from "../home/Home";
import Series from "../movies&series/Series";
import Movies from "../movies&series/Movies";



const NavBar = () => {
    return (
      <Box>
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "#A30029", color: "#FFFFF" }}
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
                  color: "#8F0024",
                },
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
                  color: "#8F0024",
                },
              }}
            >
              <TheatersIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="/series"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#8F0024",
                },
              }}
            >
              <TvIcon />
            </IconButton>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBar;