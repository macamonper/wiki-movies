import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import CarrouselCard from "../Card/CarrouselCard";
import { urlBase, apiKey } from "../../auxiliars/variables";
import { selectImage } from "../../auxiliars/functions";

const Credits= () => {
  const params = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
      fetch(
      `${urlBase}/person/${params.id}/combined_credits?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setCredits(data.cast);
      });
  }, [params.id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {credits.map((credit) => (
        <CarrouselCard
          key={credit.id}
          height={300}
          width={203}
          id={credit.id}
        title={credit.title ? credit.title : credit.name}
          type={credit.media_type}
          src={selectImage(credit, "original")}
        />
      ))}
    </Box>
  );
};
export default Credits;
