import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
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
                  color: "#BD1E1E",
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