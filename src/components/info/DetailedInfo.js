import {useParams } from "react-router-dom";
import useFetchInfo from "../../hooks/useFetchInfo";
import { tvInfoMenu,movieInfoMenu } from "../../auxiliars/variables";
import { Container,Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ToolBar from "./Toolbar";
import { Box } from "@mui/system";
import Stars from "./Stars"
import Genres from "./Genres"

const DetailedInfo = () => {

  const params = useParams()
  const info = useFetchInfo()


  return (
    <Card>
      <CardMedia
        component="img"
        alt={`poster of ${info.title}`}
        height="500"
        image={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}
      />
      <CardContent sx={{ backgroundColor: "#131315" }}>
        {params.type === "tv" ? (
          <ToolBar titles={tvInfoMenu} />
        ) : (
          <ToolBar titles={movieInfoMenu} />
        )}

        <Container sx={{ display: "flex", alignItems: "strech", pt: 3 }}>
          <Box
            sx={{
              objectFit: "cover",
            }}
          >
            <CardMedia
              component="img"
              alt={`poster of ${info.title}`}
              image={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
            />
          </Box>

          <Box sx={{ pl: "5em" }}>
            <Typography variant="h4" color={"#FFFFFF"} fontSize={30} py={2}>
              {info.title}
            </Typography>

            <Stars value={`${info.vote_average}`}></Stars>

            {info.overview != null && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                {info.overview}
              </Typography>
            )}

            {info.runtime > 1 && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Duration: {info.runtime} minutes
              </Typography>
            )}

            {info.release_date != null && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Release date: {info.release_date}
              </Typography>
            )}

            {info.budget > 1 && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Budget: ${info.budget}
              </Typography>
            )}

            {info.revenue > 1 && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Revenue: ${info.revenue}
              </Typography>
            )}
          </Box>
        </Container>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default DetailedInfo;
