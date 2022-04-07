import {
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ToolBar from "./Toolbar";
import { movieInfoMenu } from "../../auxiliars/variables";



const DetailedInfoMovie = () => {
console.log("pelicula")
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image="https://placekitten.com/200/300"
      />
      <CardContent sx={{ backgroundColor: "#131315" }}>
        <ToolBar titles={movieInfoMenu}/>

        <Typography
          gutterBottom
          variant="h5"
          color="common.white"
          textAlign="center"
          sx={{
            fontSize: 30,
            marginBottom: 3,
          }}
        >
          Lizard
        </Typography>
        <Typography variant="h4" color={"#FFFFFF"}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default DetailedInfoMovie;
