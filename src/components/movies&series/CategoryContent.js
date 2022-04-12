import useFetchCategory from "../../hooks/useFetchCategory";
import { Container, Pagination, Paper,Typography } from "@mui/material";
import { Box} from "@mui/system";
import { useParams } from "react-router-dom";
import CarrouselCard from "../Card/CarrouselCard"




const CategoryContent = () => {

  const params = useParams()

  const category = useFetchCategory(params.type, params.category)

  const categoryName = params.category
  const fixCategoryName = categoryName.replaceAll("_", " ");
  console.log(category)
  


  return (
    <Paper variant="outlined" square sx={{ backgroundColor: "#131315", pb: 6 }}>
      <Container maxWidth="xl">
        <Box>
          {params.type === "tv" ? (
            <Typography
              gutterBottom
              variant="h3"
              fontSize={30}
              mt={5}
              color="#BD1E1E "
            >
              {fixCategoryName} series
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h3"
              fontSize={30}
              mt={5}
              color="#BD1E1E "
            >
              {fixCategoryName} movies
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {category.map((media) => (
            <CarrouselCard
              height={300}
              width={203}
              id={media.id}
              title={media.title}
              name={media.name}
              src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
              type={params.type}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={100} showFirstButton showLastButton />
        </Box>
      </Container>
    </Paper>
  );
}
    


export default CategoryContent;