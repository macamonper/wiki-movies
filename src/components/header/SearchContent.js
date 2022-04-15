import MediaContent from "../movies&series/MediaContent";
import { urlBase, apiKey } from "../../auxiliars/variables";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchContent = () => {
  const params = useParams();
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetch(
      `${urlBase}/search/multi?query=${params.value}&api_key=${apiKey}&language=en-US&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  return (
    <MediaContent
      title={`Search: ${params.value}`}
      content={content}
      count={totalPages > 500 ? 500 : totalPages}
      page={page}
      changePage={handleChangePage}
    />
  );
};

export default SearchContent;
