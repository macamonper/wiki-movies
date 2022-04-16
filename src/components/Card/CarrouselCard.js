import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CarrouselCard = ({ type, id, title, src, name, height, width }) => {
  return (
    <Link to={`/${type}/${id}/info`} style={{ textDecoration: "none" }}>
      <Card
        className="carrouselCard"
        sx={{
          maxWidth: { width },
          boxShadow: "0",
          color: "#FFFFFF",
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          className="mediaCard"
          component="img"
          image={src}
          height={height}
          alt={type === "tv" ? `poster of ${name}` : `poster of ${title}`}
          sx={{
            borderRadius: "4px",
            objectFit: "contain",
          }}
        />
        <CardContent
          className="cardContent"
          sx={{
            textAlign: "left",
            pl: "0",
          }}
        >
          {type === "tv" ? (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"#EEF1EF"}
              textAlign="center"
              sx={{
                marginBottom: 3,
              }}
            >
              {name}
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"#EEF1EF"}
              textAlign="center"
              sx={{
                marginBottom: 3,
              }}
            >
              {title}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarrouselCard;
