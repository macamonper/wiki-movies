import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Genres = ({genres}) => {
    return (
      <Typography variant="h4" color={"#FFFFFF"}>
            Genres:
        {genres.map((genre) => (
          <Link to="/" key={genre.id}>
            {`${genre.name} `} 
          </Link>
        ))}
      </Typography>
    );
}

export default Genres;
