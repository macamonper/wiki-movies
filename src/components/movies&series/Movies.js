import { Paper } from "@mui/material";
import CategoryContainer from "./CategoryContainer";


const Movies = () => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{ backgroundColor: "#131315", pb: 6 }}
      >
        <CategoryContainer
          title="Popular movies"
          media="movie"
          type="popular"
        />
        <CategoryContainer
          title="Top rated movies "
          media="movie"
          type="top_rated"
        />
        <CategoryContainer
          title="Upcoming movies"
          media="movie"
          type="upcoming"
        />
        <CategoryContainer
          title="Now playing"
          media="movie"
          type="now_playing"
        />
      </Paper>
    );
}

export default Movies;
