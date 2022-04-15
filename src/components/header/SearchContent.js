import MediaContent from "../movies&series/MediaContent";
import { urlBase, apiKey } from "../../auxiliars/variables";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../404/Error404";

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
    <React.Fragment>
      {content.length === 0 ? (
        <Error404 />
      ) : (
        <MediaContent
          title={`Search: ${params.value}`}
          content={content}
          count={totalPages > 500 ? 500 : totalPages}
          page={page}
          changePage={handleChangePage}
        />
      )}
    </React.Fragment>
  );
};

export default SearchContent;
