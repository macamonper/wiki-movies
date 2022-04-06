import { Box } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";

const Footer = () => {
    return (
      <Paper variant="outlined" square sx={{ backgroundColor: "#27272B" }}>
        <Container sx={{ p: 3 }}>
          <Typography align="center" color="common.white">
            Done with 💖 and some tears by Macarena Perez
          </Typography>
        </Container>
      </Paper>
    );
}
export default Footer;
