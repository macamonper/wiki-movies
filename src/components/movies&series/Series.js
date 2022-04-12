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
          type="tv"
          category="popular"
        />
        <CategoryContainer
          title="Top rated series "
          type="tv"
          category="top_rated"
        />
   
        <CategoryContainer
          title="On the air"
          type="tv"
          category="on_the_air"
        />
      </Paper>
    );
}

export default Series;