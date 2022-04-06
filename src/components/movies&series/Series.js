import { Paper } from "@mui/material";
import CategoryContainer from "./CategoryContainer";

const Series = () => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{ backgroundColor: "#131315", pb: 6 }}
      >
        <CategoryContainer
          title="Popular series"
          media="tv"
          type="popular"
        />
        <CategoryContainer
          title="Top rated series "
          media="tv"
          type="top_rated"
        />
   
        <CategoryContainer
          title="Now playing"
          media="tv"
          type="on_the_air"
        />
      </Paper>
    );
}

export default Series;