import {useParams } from "react-router-dom";
import useFetchInfo from "../../hooks/useFetchInfo";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import SocialMedia from "./SocialMedia";
import MovieAndSeries from "./Movie&Series";
import PersonInfo from "./PersonInfo";
import { selectImage } from "../../auxiliars/functions";


const DetailedInfo = () => {

  const params = useParams()
  const info = useFetchInfo(params.type,params.id)

  return (
    <div>
      <Card
        sx={{
          borderRadius: "0px",
        }}
      >
        <Box sx={{ height: "500px" }}>
          <CardMedia
            component="img"
            alt={`poster of ${info.title}`}
            height="100%"
            image={selectImage(info,"original")}
          />
        </Box>

        {params.type === "person" ? (
          <PersonInfo info={info} />
        ) : (
          <MovieAndSeries info={info} />
        )}

        <CardActions
          sx={{
            backgroundColor: "#131315",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {info.homepage && (
            <a href={info.homepage} target="_blank" className="homepageLink">
              Check it out here!
            </a>
          )}

          <SocialMedia></SocialMedia>
        </CardActions>
      </Card>
    </div>
  );
};

export default DetailedInfo;
