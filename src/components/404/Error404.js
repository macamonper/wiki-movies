import { Container, Paper,Box, Typography } from "@mui/material";
import React from "react";

const Error404 = () => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{ backgroundColor: "#131315", pb: 6 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 7.4,
          }}
        >
          <Box>
            <Typography
              variant="p"
              fontSize={20}
              color={"#EDEDF4"}
              align="center"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Yep, I've never seen that...
            </Typography>
            AA9ABA
            <Typography
              variant="h1"
              fontSize={250}
              color={"error.main"}
              align="center"
            >
              404
            </Typography>
            <Typography
              variant="p"
              fontSize={20}
              color={"#EDEDF4"}
              align="center"
              sx={{
                display: "flex",
              }}
            >
              Please, stop embarassing in my workplace😳!
            </Typography>
            <Typography
              variant="p"
              fontSize={20}
              color={"#EDEDF4"}
              align="center"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Search another thing.
            </Typography>
          </Box>
        </Container>
      </Paper>
    );

}
export default Error404;