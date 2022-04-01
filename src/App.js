import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import "./index.css"
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";
import Movies from "./components/movies&series/Movies";
import Series from "./components/movies&series/Series";
import Footer from "./components/footer/Footer";
import Error404 from "./components/404/Error404"





const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        {
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/series" element={<Series />}></Route>
              <Route path="/*" element = {<Error404/>}></Route>
            </Routes>
            <Footer />
          </div>
        }
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;