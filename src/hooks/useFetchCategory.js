import { useState, useEffect } from "react";
import { apiKey, urlBase } from "../auxiliars/variables";

const useFetchCategory = (type, categoryContent, page) => {
  const [category, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(
      `${urlBase}/${type}/${categoryContent}?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.results);
        setTotalPages(data.total_pages);
      });
  }, [type, categoryContent, page]);

  return {
    content: category,
    totalPages: totalPages,
  };
};

export default useFetchCategory;
