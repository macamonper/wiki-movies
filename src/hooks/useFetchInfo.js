
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey,urlBase } from "../auxiliars/variables";

const useFetchInfo = () => {

  const params = useParams()
  
      const [info, setInfo] = useState([]);

      useEffect(() => {
        fetch(
          `${urlBase}/${params.type}/${params.id}?api_key=${apiKey}&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setInfo(data));
      }, [])
    
    return info
    
}

export default useFetchInfo;