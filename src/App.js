// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/NavBar/Navbar";
import HomePage from "./Component/HomePage/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage/>
        {/* <GridAlbum/>
      <BigCards/>
      <div className="center">
        <HorizontalSmall />
      </div> */}
    </>
  );
}

export default App;
