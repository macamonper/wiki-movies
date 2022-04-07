import { Toolbar } from "@mui/material";
import ButtonTitle from "./ButtonTitle";

const ToolBar = ({ titles }) => {
    return (
      <Toolbar sx={{ justifyContent: "center" }}>
        {titles.map((title) => (
          <ButtonTitle key={title} title={title} />
        ))}
      </Toolbar>
    );
}

export default ToolBar;