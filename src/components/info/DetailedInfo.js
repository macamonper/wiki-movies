import {useParams } from "react-router-dom";
import useFetchInfo from "../../hooks/useFetchInfo";
import { tvInfoMenu,movieInfoMenu } from "../../auxiliars/variables";
import { Container,Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ToolBar from "./Toolbar";
import { Box } from "@mui/system";
import Stars from "./Stars"
import { currencyFormat } from "../../auxiliars/functions";
import SocialMedia from "./SocialMedia";

const DetailedInfo = () => {

  const params = useParams()
  const info = useFetchInfo()

  return (
    <Card
      sx={{
        borderRadius: "0px",
      }}
    >
      <CardMedia
        component="img"
        alt={`poster of ${info.title}`}
        height="500"

        image={
          info.poster_path &&
          `https://image.tmdb.org/t/p/original/${info.backdrop_path}`
        }
      />
      <CardContent sx={{ backgroundColor: "#131315" }}>
        {params.type === "tv" ? (
          <ToolBar array={tvInfoMenu} />
        ) : (
          <ToolBar array={movieInfoMenu} />
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
              image={
                info.poster_path &&
                `https://image.tmdb.org/t/p/w500/${info.poster_path}`
              }
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
            {info.first_air_date && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Release date: {info.first_air_date}
              </Typography>
            )}
            {info.budget > 1 && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Budget: {currencyFormat(info.budget)}
              </Typography>
            )}
            {info.revenue > 1 && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Revenue: {currencyFormat(info.revenue)}
              </Typography>
            )}
            {info.number_of_episodes && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Episodes: {info.number_of_episodes}
              </Typography>
            )}
            {info.number_of_season && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Seasons: {info.number_of_season}
              </Typography>
            )}
          </Box>
        </Container>
      </CardContent>

      <CardActions
        sx={{
          backgroundColor: "#131315",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {info.homepage && (
          <a href={info.homepage} target="_blank" className="homepageLink">
            Check it out here!
          </a>
        )}

        <SocialMedia></SocialMedia>
      </CardActions>
    </Card>
  );
};

export default DetailedInfo;
