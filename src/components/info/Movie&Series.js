import React from "react";
import { currencyFormat, selectImage } from "../../auxiliars/functions";
import { infoMenu } from "../../auxiliars/variables";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ToolBar from "./Toolbar";
import { CardActions, Container, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";
import Stars from "./Stars";
import Cast from "./Cast";
import Videos from "./Videos";
import Similars from "./Similars";

const MovieAndSeries = ({ info }) => {
  const params = useParams();

  return (
    <React.Fragment>
      <Box sx={{ height: "500px", p: "0px" }} className="posterMedia">
        <CardMedia
          component="img"
          alt={`poster of ${info.title}`}
          height="100%"
          image={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}
        />
      </Box>

      <CardContent sx={{ backgroundColor: "#131315", p: "0px" }}>
        <ToolBar array={infoMenu} />

        <Container
          sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}
        >
          {params.menu === "info" && (
            <React.Fragment>
              <Container
                className="containerInfo"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ width: "30%" }}>
                  <CardMedia
                    component="img"
                    alt={`poster of ${info.name}`}
                    image={selectImage(info, "original")}
                  />
                </Box>

                <Box sx={{ pl: "1.8em", width: "70%" }}>
                  {params.type === "movie" ? (
                    <Typography variant="h4" color={"#FFFFFF"} py={2}>
                      {info.title}
                    </Typography>
                  ) : (
                    <Typography variant="h4" color={"#FFFFFF"} py={2}>
                      {info.name}
                    </Typography>
                  )}

                  <Stars value={`${info.vote_average}`}></Stars>

                  <Typography variant="h5" color={"#FFFFFF"} py={2}>
                    {info.overview}
                  </Typography>

                  {info.runtime > 1 && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Duration: {info.runtime} minutes
                    </Typography>
                  )}
                  {info.release_date != null && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Release date: {info.release_date}
                    </Typography>
                  )}
                  {info.first_air_date && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Release date: {info.first_air_date}
                    </Typography>
                  )}
                  {info.budget > 1 && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Budget: {currencyFormat(info.budget)}
                    </Typography>
                  )}
                  {info.revenue > 1 && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Revenue: {currencyFormat(info.revenue)}
                    </Typography>
                  )}
                  {info.number_of_episodes && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Episodes: {info.number_of_episodes}
                    </Typography>
                  )}
                  {info.number_of_season && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Seasons: {info.number_of_season}
                    </Typography>
                  )}
                </Box>
              </Container>
              <Container sx={{ p: "0px" }}>
                <CardActions
                  sx={{
                    backgroundColor: "#131315",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "strech",
                    flexWrap: "nowrap",
                  }}
                >
                  {info.homepage && (
                    <a
                      href={info.homepage}
                      target="_blank"
                      className="homepageLink"
                      rel="noreferrer"
                    >
                      Check it out here!
                    </a>
                  )}
                  <SocialMedia></SocialMedia>
                </CardActions>
              </Container>
            </React.Fragment>
          )}
          {params.menu === "cast" && (
            <Box>
              <Cast />
            </Box>
          )}
          {params.menu === "videos" && (
            <Box>
              <Videos />
            </Box>
          )}
          {params.menu === "similars" && (
            <Box>
              <Similars />
            </Box>
          )}
        </Container>
      </CardContent>
    </React.Fragment>
  );
};

export default MovieAndSeries;
