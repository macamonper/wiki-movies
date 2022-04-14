import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import {tvInfoMenu,movieInfoMenu} from "../../auxiliars/variables";
import ToolBar from "./Toolbar";
import CardMedia from "@mui/material/CardMedia";
import { currencyFormat, selectImage } from "../../auxiliars/functions";
import Stars from "./Stars";
import { useParams } from "react-router-dom";

const MovieAndSeries = ({ info } ) => {

  const params = useParams()
  
  return (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: "#131315" }}>
        {params.type === "tv" ? (
          <ToolBar array={tvInfoMenu} />
        ) : (
          <ToolBar array={movieInfoMenu} />
        )}

        <Container
          sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}
        >
          <Box sx={{ width: "25%" }}>
            <CardMedia
              component="img"
              alt={`poster of ${info.name}`}
              image={selectImage(info, "original")}
            />
          </Box>

          <Box sx={{ pl: "5em", width: "50%" }}>
            {params.type === "movie" ? (
              <Typography variant="h4" color={"#FFFFFF"} fontSize={30} py={2}>
                {info.title}
              </Typography>
            ) : (
              <Typography variant="h4" color={"#FFFFFF"} fontSize={30} py={2}>
                {info.name}
              </Typography>
            )}

            <Stars value={`${info.vote_average}`}></Stars>

            <Typography variant="h5" color={"#FFFFFF"} fontSize={20} py={2}>
              {info.overview}
            </Typography>

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
    </React.Fragment>
  );
};

export default MovieAndSeries;
