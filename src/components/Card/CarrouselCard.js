import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const CarrouselCard = ({ type, id, title, src, name,height,width}) => {

  return (

    <Link to={`/${type}/${id}/info`} style={{ textDecoration: "none" }}>
      <Card 
        className="carrouselCard"
        sx={{
          maxWidth: {width},
          boxShadow: "0",
          color: "#FFFFFF",
          backgroundColor: "transparent",
        }}
      >
      
          <CardMedia
            component="img"
            image={src}
            height={height}
            alt={`poster of ${(title, name)}`}
          sx={{
              borderRadius:"4px",
            objectFit: "contain",
              
            }}
          />
          <CardContent
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
                  fontSize: 18,
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
                  fontSize: 18,
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
}
  
export default CarrouselCard;