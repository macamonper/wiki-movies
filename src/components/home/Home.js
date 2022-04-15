import { Paper } from "@mui/material";
import CardContainer from "../Card/CardContainer";

const Home = () => {
  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
      <CardContainer title="Trending movies" type="movie" category="trending" />
      <CardContainer title="Trending series" type="tv" category="trending" />
    </Paper>
  );
};

export default Home;
