import notAvailable from "../images/notAvailable.svg";

export const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const selectImage = (content, size) => {
  if (content.poster_path) {
    return `https://image.tmdb.org/t/p/original/${content.poster_path}`;
  } else if (content.profile_path) {
    return `https://image.tmdb.org/t/p/${size}/${content.profile_path}`;
  } else if (content.still_path) {
    return `https://image.tmdb.org/t/p/${size}/${content.still_path}`;
  } else if (
    content.poster_path === null ||
    content.profile_path === null ||
    content.still_path === null
  )
    return notAvailable;
};
