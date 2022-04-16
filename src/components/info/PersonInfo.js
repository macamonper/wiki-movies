import React from "react";
import { useParams } from "react-router-dom";
import { personInfoMenu } from "../../auxiliars/variables";
import { selectImage } from "../../auxiliars/functions";
import { CardActions, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ToolBar from "./Toolbar";
import Stars from "./Stars";
import SocialMedia from "./SocialMedia";
import Credits from "./Credits";

const PersonInfo = ({ info }) => {
  const params = useParams();
  return (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: "#131315" }}>
        <ToolBar array={personInfoMenu} />

        <Container
          sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}
        >
          {params.menu === "info" && (
            <React.Fragment>
              <Container
                className="containerInfoPerson"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <Box className="cardMediaPerson" sx={{ width: "30%" }}>
                  <CardMedia
                    component="img"
                    alt={`poster of ${info.name}`}
                    image={selectImage(info, "original")}
                  />
                </Box>

                <Box className ="infoPersonBox" sx={{ pl: "5em", width: "70%" }}>
                  <Typography variant="h4" color={"#FFFFFF"} py={2}>
                    {info.name}
                  </Typography>

                  <Stars value={`${info.popularity}`}></Stars>

                  <Typography variant="h5" color={"#F5F3F4"} py={1}>
                    {info.biography}
                  </Typography>

                  <Typography variant="h5" color={"#F5F3F4"} py={1}>
                    Birthday: {info.birthday}
                  </Typography>

                  {info.death_day && (
                    <Typography variant="h5" color={"#F5F3F4"} py={1}>
                      Death Day: {info.death_day}
                    </Typography>
                  )}
                </Box>
              </Container>

              <Container>
                <CardActions
                  sx={{
                    backgroundColor: "#131315",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
          {params.menu === "credits" && <Credits />}
        </Container>
      </CardContent>
    </React.Fragment>
  );
};

export default PersonInfo;
