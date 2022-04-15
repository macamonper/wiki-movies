import {Paper, Box, Typography } from "@mui/material";

const Error404 = () => {
  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
     <Box sx={{ height: '70vh',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 7.4,
        }}
      >
        <Box>
          <Typography
            variant="p"
            color={"#EDEDF4"}
            align="center"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Yep, You win. I've never seen that...
          </Typography>

          <Typography
            variant="h2"
            color={"error.main"}
            align="center"
          >
            404
          </Typography>

          <Typography
            variant="p"
            color={"#EDEDF4"}
            align="center"
            sx={{
              display: "flex",
            }}
          >
            Please, STOP embarassing at my workplace😳!
          </Typography>

          <Typography
            variant="p"
            color={"#EDEDF4"}
            align="center"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Search for another thing.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
export default Error404;
