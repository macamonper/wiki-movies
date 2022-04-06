import { Typography, IconButton, Container } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CategoryCarrousel from "./CategoryCarrousel";


const CategoryContainer = ({ title, media,type}) => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: 250,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          fontSize={30}
          mt={5}
          color="common.white"
          sx={{
            lineHeight: 1.5,
          }}
        >
          {title}
        </Typography>

        <IconButton
          aria-label="see more ${title}"
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
        <CategoryCarrousel media={media} type={type}></CategoryCarrousel>
      </Box>
    </Container>
  );
};

export default CategoryContainer;
