import React from "react";
import { Paper } from "@mui/material";
import CardContainer from "./CardContainer";

const Home = () => {
    return (
        
        <Paper variant="outlined" square sx={{ backgroundColor: "#061C1F",pb:6 }}>
            
        <CardContainer/>
            <CardContainer />
            
            
        </Paper>

    );
}

export default Home;