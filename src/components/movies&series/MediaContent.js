import { useParams } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CarrouselCard from "../Card/CarrouselCard";
import Pager from "./Pager";
import notAvailable from "../../images/notAvailable.svg";


const MediaContent = ({ title, content, count,page,changePage}) => {

  const params = useParams();
 
  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
      <Container maxWidth="xl">
        <Box>
          {params.type === "tv" ? (
            <Typography
              gutterBottom
              variant="h3"
              fontSize={30}
              mt={5}
              color="#BD1E1E "
            >
              {title} {params.type} shows
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h3"
              fontSize={30}
              mt={5}
              color="#BD1E1E "
            >
              {title} {params.type}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {content.map((media) => (
            <CarrouselCard
              key={media.id}
              height={300}
              width={203}
              id={media.id}
              title={media.title}
              name={media.name}
              src={
                media.poster_path != null
                  ? `https://image.tmdb.org/t/p/w300/${media.poster_path}`
                  : notAvailable
              }
              type={params.type ? params.type : media.media_type}
            />
          ))}
        </Box>
        <Pager page={page} changePage={changePage} count={count} />
      </Container>
    </Paper>
  );
};
export default MediaContent;
