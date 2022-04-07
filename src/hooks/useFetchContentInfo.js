
import { useState, useEffect } from "react";
import { apiKey,urlBase } from "../auxiliars/variables";

const useFetchContentInfo= (type,id) => {
      const [contentInfo, setContentInfo] = useState([]);

      useEffect(() => {
        fetch(
          `${urlBase}/${type}/${id}?api_key=${apiKey}&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setContentInfo(data.results));
      }, [])
    
    return contentInfo
    
}

export default useFetchContentInfo;