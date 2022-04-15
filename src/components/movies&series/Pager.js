import { Box } from "@mui/system";
import { Pagination } from "@mui/material";

const Pager = ({ count, page, changePage }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={count}
        page={page}
        showFirstButton
        showLastButton
        onChange={changePage}
      />
    </Box>
  );
};
export default Pager;
