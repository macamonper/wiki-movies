import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";
import Movies from "./components/movies&series/Movies";
import Series from "./components/movies&series/Series"
import Error404 from "./components/404/Error404";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
       <BrowserRouter>
     
            <NavBar />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movies" element={<Movies />}/>
                <Route path="/series" element={<Series />}/>
                <Route path="/*" element={<Error404 />}/>
              </Routes>
              <Footer />
       
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;