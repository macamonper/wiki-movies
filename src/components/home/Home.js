import { Paper } from "@mui/material";
import CardContainer from "../carrouselCard/CardContainer";


const Home = () => {

  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
      <CardContainer title="Trending movies" type="movie"/>
      <CardContainer title="Trending series" type="tv" />
    </Paper>
  );
}

export default Home;