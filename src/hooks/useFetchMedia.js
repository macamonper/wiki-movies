import { useState, useEffect } from "react";
import { apiKey,urlBase } from "../auxiliars/variables";

const useFetchMedia = (media) => {
      const [content, setContent] = useState([]);

      useEffect(() => {
        fetch(
          `${urlBase}/trending/${media}/day?api_key=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => setContent(data.results));
      }, [media])
    
    return content
    
}

export default useFetchMedia;
