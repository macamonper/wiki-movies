import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
      <Box>
        
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "#023A40", color: "#FFFFF" }}
        >
          <Toolbar>
            <IconButton
              component={Link}
              to="../home/Home"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#023A40",
                },
              }}
            >
              <CottageIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="../trending/TrendingMovies"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#023A40",
                },
              }}
            >
              <TheatersIcon />
            </IconButton>
            <IconButton
              component={Link}
              to="../trending/TrendingSeries"
              color="inherit"
              aria-label="home"
              size="large"
              sx={{
                ":hover": {
                  bgcolor: "#FFFFFF",
                  color: "#023A40",
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