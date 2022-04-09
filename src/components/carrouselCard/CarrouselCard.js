import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const CarrouselCard = ({ type,id, title, src ,name}) => {

  return (
    <Link to={`/${type}/${id}/info`} style={{ textDecoration: "none" }}>
      <Card
        className="carrouselCard"
        sx={{
          boxShadow: "0",
          color: "#FFFFFF",
          backgroundColor: "transparent",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={src}
            alt={`poster of ${(title, name)}`}
          />
          <CardContent
            sx={{
              textAlign: "left",
              pl: "0",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"#EEF1EF"}
              textAlign="center"
              sx={{
                fontSize: 18,
                marginBottom: 3,
              }}
            >
              {title}
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
  
export default CarrouselCard;