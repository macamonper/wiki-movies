import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import { personInfoMenu } from "../../auxiliars/variables";
import { selectImage } from "../../auxiliars/functions";
import ToolBar from "./Toolbar";
import CardMedia from "@mui/material/CardMedia";
import Stars from "./Stars";

const PersonInfo = ({ info } ) => {
  return (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: "#131315" }}>
        
        <ToolBar array={personInfoMenu} />

        <Container sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
          <Box sx={{ width:"25%" }}>
            <CardMedia
              component="img"
              alt={`poster of ${info.name}`}
              image={selectImage(info,"original")}
            />
          </Box>

          <Box sx={{ pl: "5em",width:"50%" }}>
            <Typography variant="h4" color={"#FFFFFF"} fontSize={30} py={2}>
              {info.name}
            </Typography>

            <Stars value={`${info.popularity}`}></Stars>

            <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
              {info.biography}
            </Typography>

            <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
              Birthday: {info.birthday}
            </Typography>

            {info.death_day && (
              <Typography variant="h5" color={"#F5F3F4"} fontSize={20} py={1}>
                Death Day: {info.death_day}
              </Typography>
            )}
          </Box>
        </Container>
      </CardContent>
    </React.Fragment>
  );
};

export default PersonInfo;
