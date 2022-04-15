import { useParams } from "react-router-dom";
import useFetchInfo from "../../hooks/useFetchInfo";
import Card from "@mui/material/Card";
import MovieAndSeries from "./Movie&Series";
import PersonInfo from "./PersonInfo";

const DetailedInfo = () => {
  const params = useParams();
  const info = useFetchInfo(params.type, params.id);

  return (
    <Card
      sx={{
        borderRadius: "0px",
      }}
    >
      {params.type === "person" ? (
        <PersonInfo info={info} />
      ) : (
        <MovieAndSeries info={info} />
      )}
    </Card>
  );
};

export default DetailedInfo;
