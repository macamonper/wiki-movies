

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey, urlBase } from "../auxiliars/variables";

const useFetchSocialMedia = () => {
  const params = useParams();

  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    fetch(
      `${urlBase}/${params.type}/${params.id}/external_ids?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setSocialMedia(data));
  }, []);

  return socialMedia;
};

export default useFetchSocialMedia;