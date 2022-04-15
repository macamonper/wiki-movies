import { useState, useEffect } from "react";
import { apiKey, urlBase } from "../auxiliars/variables";

const useFetchTrending = (type, page) => {
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(
      `${urlBase}/trending/${type}/day?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
        setTotalPages(data.total_pages);
      });
  }, [type,page]);
  return {
    content: content,
    totalPages: totalPages,
  };
};

export default useFetchTrending;
