import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import CarrouselCard from "../Card/CarrouselCard";
import { urlBase, apiKey } from "../../auxiliars/variables";
import notAvailable from "../../images/notAvailable.svg";

const Cast = () => {
    
  const params = useParams()
  const [cast, setCast] = useState([]);
  
    
    useEffect(() => {

      fetch(`${urlBase}/${params.type}/${params.id}/credits?api_key=${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((data) => {
          setCast(data.cast)
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
      {cast.map((person) => (
        <CarrouselCard
          key={person.id}
          height={300}
          width={203}
          id={person.id}
          title={person.name}
          type={`person`}
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
              : notAvailable
          }
        />
      ))}
    </Box>
  
  );
};
export default Cast;
