import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";
import Movies from "./components/movies&series/Movies";
import Series from "./components/movies&series/Series";
import DetailedInfo from "./components/info/DetailedInfo";
import CategoryContent from "./components/movies&series/CategoryContent";
import TrendingContent from "./components/movies&series/TrendingContent";
import Cast from "./components/info/Cast";
import Similars from "./components/info/Similars";
import Videos from "./components/info/Videos";
import Episodes from "./components/info/Episodes"
import Error404 from "./components/404/Error404";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Series />} />
          <Route path=":type/:id/info" element={<DetailedInfo />} />
          <Route path=":type/:category" element={<CategoryContent />} />
          <Route path=":type/trending" element={<TrendingContent />} />
          <Route path=":type/:id/cast" element={<Cast />} />
          <Route path=":type/:id/similars" element={<Similars />} />
          <Route path=":type/:id/videos" element={<Videos />} />
          <Route path=":type/:id/episodes" element={<Episodes />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;