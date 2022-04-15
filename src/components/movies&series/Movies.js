import { Paper } from "@mui/material";
import CategoryContainer from "./CategoryContainer";

const Movies = () => {
  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
      <CategoryContainer
        title="Popular movies"
        type="movie"
        category="popular"
      />
      <CategoryContainer
        title="Top rated movies "
        type="movie"
        category="top_rated"
      />
      <CategoryContainer
        title="Upcoming movies"
        type="movie"
        category="upcoming"
      />
      <CategoryContainer
        title="Now playing movies"
        type="movie"
        category="now_playing"
      />
    </Paper>
  );
};

export default Movies;
