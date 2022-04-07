import { useState, useEffect } from "react";
import { apiKey,urlBase } from "../auxiliars/variables";

const useFetchType = (type) => {
      const [content, setContent] = useState([]);

      useEffect(() => {
        fetch(
          `${urlBase}/trending/${type}/day?api_key=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => setContent(data.results));
      }, [type])
    
    return content
    
}

export default useFetchType;
