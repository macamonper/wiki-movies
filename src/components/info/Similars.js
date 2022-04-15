import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import CarrouselCard from "../Card/CarrouselCard";
import { urlBase, apiKey } from "../../auxiliars/variables";
import { selectImage } from "../../auxiliars/functions";

const Similars = () => {
  const params = useParams();
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    fetch(
      `${urlBase}/${params.type}/${params.id}/similar?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilars(data.results);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {similars.map((content) => (
        <CarrouselCard
          key={content.id}
          height={300}
          width={203}
          title={content.title}
          name={content.name}
          src={selectImage(content, "w500")}
          id={content.id}
          type={params.type}
        />
      ))}
    </Box>
  );
};
export default Similars;
