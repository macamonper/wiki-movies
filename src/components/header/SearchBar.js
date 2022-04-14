import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IconButton } from '@mui/material';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const SearchBar = () => {

  const navigate = useNavigate();
  const [inputBaseValue, setInputBaseValue] = useState("");

  const handleSubmit = (e) => {
        navigate(`/search/${inputBaseValue}`);

  } 
  const handleChangeSearch = (e) => {
    setInputBaseValue(e.target.value);
  };
    return (
      <Box component="form" onSubmit={handleSubmit}>
        <Search>
          <IconButton type="submit">
            <SearchIcon
              sx={{
                ":hover": {
                  color: "#BD1E1E",
                },
              }}
            />
          </IconButton>

          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleChangeSearch}
          />
        </Search>
      </Box>
    );
}

export default SearchBar;