import { CircularProgress, Container, Modal } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  bgcolor: "#47474f9b" ,
  justifyContent: "center",
  alignItems: "center",
}

const Loader = () => {

  return (
    <Container sx={{ ...style }}>
      <CircularProgress color="primary" />
    </Container>
  );
}

export default Loader
