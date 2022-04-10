
import React from "react";
import { Typography, IconButton, Container } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carrousel from "./Carrousel";

const CardContainer = ({title}) => {
  
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            width: 300,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1" fontSize={30} mt={5} color="common.white" sx={{
            lineHeight:1.5
          }} >
          {title}
          </Typography>

          <IconButton
            sx={{
              color: "#FFFFFF",
              ":hover": {
                bgcolor: "#3F4445",
                color: "#fffff",
              }
            }}>
            <ArrowForwardIcon/>
          </IconButton>
        </Box>

        <Box sx={{ mt: 3, mb: 1.5 }}>
          <Carrousel />
        </Box>
      </Container>
    );
}

export default CardContainer;