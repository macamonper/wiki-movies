import { Button } from "@mui/material";
import useFetchSocialMedia from "../../hooks/useFetchSocialMedia";
import {
  FaFacebook,
  FaImdb,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Box } from "@mui/system";


const SocialMedia = () => {

  const socialMedia = useFetchSocialMedia();

  return (
    <Box sx={{ m: "1em" }}>
      {socialMedia.imdb_id != null && (
        <Button
          size="large"
          aria-label="visit Imdb page"
          href={`https://imdb.com/title/${socialMedia.imdb_id}`}
          target="_blank"
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