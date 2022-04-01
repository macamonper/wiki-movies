import React from "react";
import { Paper } from "@mui/material";
import CardContainer from "../card/CardContainer";

const Home = () => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{ backgroundColor: "#131315", pb: 6 }}
      >
        <CardContainer />
        <CardContainer />
      </Paper>
    );
}

export default Home;