import { useState } from "react";
import useFetchTrending from "../../hooks/useFetchTrending";
import { useParams } from "react-router-dom";
import MediaContent from "./MediaContent";

const TrendingContent = () => {
  
  const params = useParams();
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };   
  const content = useFetchTrending(params.type, page)
  const title = "Trending";
  
  return (
    <MediaContent
      title={title}
      content={content.content}
      count={content.totalPages > 500 ? 500 : content.totalPages}
      page={page}
      changePage={handleChangePage}
    />
  );
};

export default TrendingContent;
