import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import "./index.css"
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";




const App = () => {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme />
      {
        <div>
          <NavBar />
       
          <Home />
        
          <Footer/>
        </div>
      }
    </React.Fragment>
  );
}

export default App;