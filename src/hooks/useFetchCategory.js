import { useState, useEffect } from "react";
import { apiKey, urlBase } from "../auxiliars/variables";

const useFetchCategory = (type, categoryContent) => {
  
    
  const [category, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}/${type}/${categoryContent}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setCategories(data.results));
  }, [categoryContent]);

  return category;
};

export default useFetchCategory;
