import { useState, useEffect } from "react";
import { apiKey, urlBase } from "../auxiliars/variables";

const useFetchCategory = (media, type) => {
    
  const [category, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}/${media}/${type}?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setCategories(data.results));
  }, [type]);

  return category;
};

export default useFetchCategory;
