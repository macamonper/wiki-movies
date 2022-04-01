import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const InfoCard = () => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 0,
        color: "#FFFFFF",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="http://placekitten.com/200/300"
          alt="green iguana"
        />
        <CardContent
          sx={{
            backgroundColor: "#131315",
            textAlign: "left",
            pl: "0",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={"#EEF1EF"}
            sx={{
              fontSize: 18,
              marginBottom: 3,
            }}
          >
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard;