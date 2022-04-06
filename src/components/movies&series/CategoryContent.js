import { Paper } from "@mui/material"
import CategoryContainer from "./CategoryContainer";


const categoryContent = () => {
   
    return (
      <Paper
        variant="outlined"
        square
        sx={{ backgroundColor: "#131315", pb: 6 }}
      >
        <CategoryContainer title="Trending movies"/>
      </Paper>
    );
}