import useFetchCategory from "../../hooks/useFetchCategory";
import { useParams } from "react-router-dom";
import MediaContent from "./MediaContent";
import { useState } from "react";


const CategoryContent = () => {

  const params = useParams()
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };   
  const content = useFetchCategory(params.type, params.category, page)
  const title = params.category.replaceAll("_", " ");

  return (
    <MediaContent
      title={title === "on the air" ? ("Currently airing") : (title)}
      content={content.content}
      count={content.totalPages> 500 ? 500 : content.totalPages} 
      page={page}
      changePage={handleChangePage}
    />
  );
}
    


export default CategoryContent;