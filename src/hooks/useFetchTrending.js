import { useState, useEffect } from "react";
import { apiKey,urlBase } from "../auxiliars/variables";

const useFetchTrending = (type) => {

      const [content, setContent] = useState([]);

      useEffect(() => {
        fetch(
          `${urlBase}/trending/${type}/day?api_key=${apiKey}&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setContent(data.results));
      }, [type])
    
    return content
    
}

export default useFetchTrending;
