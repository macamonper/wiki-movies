import { Toolbar } from "@mui/material";
import ButtonTitle from "./ButtonTitle";

const ToolBar = ({ array }) => {
  return (
    <Toolbar sx={{ justifyContent: "center" }}>
      {array.map((arr) => (
        <ButtonTitle key={arr} title={arr} variant="text" />
      ))}
    </Toolbar>
  );
};

export default ToolBar;
