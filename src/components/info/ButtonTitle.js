import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ButtonTitle = ({ title }) => {
  const params = useParams();
  const titleToLowerCase = title.toLowerCase();

  return (
    <Button
      component={Link}
      to={`/${params.type}/${params.id}/${titleToLowerCase}`}
      size="large"
      sx={{
        color: "#BD1E1E",
        fontFamily: " 'Bebas Neue', cursive",
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonTitle;
