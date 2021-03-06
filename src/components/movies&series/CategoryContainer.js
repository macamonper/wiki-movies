import { Typography, IconButton, Container } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CategoryCarrousel from "./CategoryCarrousel";
import { Link } from "react-router-dom";

const CategoryContainer = ({ title, type, category }) => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "left",
        }}
      >
        <Typography variant="h3" mt={5} mr={2} color="#BD1E1E ">
          {title}
        </Typography>

        <IconButton
          component={Link}
          to={`/${type}/${category}`}
          aria-label={`see more ${title}`}
          sx={{
            color: "#FFFFFF",
            ":hover": {
              bgcolor: "#3F4445",
              color: " #BD1E1E",
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Box sx={{ mt: 3, mb: 1.5 }}>
        <CategoryCarrousel type={type} category={category}></CategoryCarrousel>
      </Box>
    </Container>
  );
};

export default CategoryContainer;
