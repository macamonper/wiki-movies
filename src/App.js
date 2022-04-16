import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/header/NavBar";
import SearchContent from "./components/header/SearchContent";
import Home from "./components/home/Home";
import Movies from "./components/movies&series/Movies";
import Series from "./components/movies&series/Series";
import DetailedInfo from "./components/info/DetailedInfo";
import CategoryContent from "./components/movies&series/CategoryContent";
import TrendingContent from "./components/movies&series/TrendingContent";
import Error404 from "./components/404/Error404";
import Footer from "./components/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "10rem",
      },
    },

    h3: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.3rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "0.7rem",
      textAlign: "left",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3rem",
      },
    },
    p: {
      fontSize: "0.7rem",
      textAlign: "left",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3rem",
      },
    },
    button: {
      fontSize: "2rem",
      textAlign: "left",
      "@media (min-width:600px)": {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
    },
  },
});

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:value" element={<SearchContent />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<Series />} />
            <Route path=":type/:id/:menu" element={<DetailedInfo />} />
            <Route path=":type/:category" element={<CategoryContent />} />
            <Route path=":type/trending" element={<TrendingContent />} />

            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
