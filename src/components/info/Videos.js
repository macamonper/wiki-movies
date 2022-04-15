import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { urlBase, apiKey } from "../../auxiliars/variables";
import ReactPlayer from "react-player";
import { Box } from "@mui/system";

const Videos = () => {
  const params = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `${urlBase}/${params.type}/${params.id}/videos?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.results);
      });
  }, [params.id]);
    return (

        <Box sx={{ display: "flex",justifyContent:"space-evenly",flexWrap:"wrap" }}  >
            
        {videos.map((video) => (
          <Box m={3}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${video.key}`}
              width="100%"
              height="100%"
            />
          </Box>
        ))}
        </Box>
    );
};
export default Videos;
