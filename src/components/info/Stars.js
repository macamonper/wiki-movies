import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Rating } from "@mui/material";

const Stars = ({value}) => {

  console.log(value)
  return (
    <Rating
      name="rating"
      max={10}
      value={value}
      precision={0.5}
      emptyIcon={<StarBorderIcon className="Star" fontSize="inherit" />}
      readOnly
      />
  );
};

export default Stars;
