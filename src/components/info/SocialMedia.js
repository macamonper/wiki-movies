import { Button } from "@mui/material";
import useFetchSocialMedia from "../../hooks/useFetchSocialMedia";
import {
  FaFacebook,
  FaImdb,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";


const SocialMedia = () => {

  const params = useParams()

  const socialMedia = useFetchSocialMedia();

  return (
    <Box sx={{ m: "1em" }}>
      {socialMedia.imdb_id != null && (
        <Button
          size="large"
          aria-label="visit Imdb page"
          href={
            params.type === "person"
              ? `https://imdb.com/name/${socialMedia.imdb_id}`
              : `https://imdb.com/title/${socialMedia.imdb_id}`
          }
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "1.5rem",
            color: "#BD1E1E",
          }}
        >
          <FaImdb />
        </Button>
      )}
      {socialMedia.facebook_id != null && (
        <Button
          aria-label="visit Facebook page"
          href={`https://www.facebook.com/${socialMedia.facebook_id}/`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "1.5rem",
            color: "#BD1E1E",
          }}
        >
          <FaFacebook />
        </Button>
      )}
      {socialMedia.twitter_id != null && (
        <Button
          aria-label="visit twitter page"
          href={`https://twitter.com/${socialMedia.twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "1.5rem",
            color: "#BD1E1E",
          }}
        >
          <FaTwitterSquare />
        </Button>
      )}
      {socialMedia.instagram_id != null && (
        <Button
          aria-label="visit instagram page"
          href={`https://instagram.com/${socialMedia.instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "1.5rem",
            color: "#BD1E1E",
          }}
        >
          <FaInstagram />
        </Button>
      )}
    </Box>
  );
}



export default SocialMedia;