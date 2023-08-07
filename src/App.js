import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/NavBar/Navbar";
import HomePage from "./Component/HomePage/HomePage";
import Bollywood from "./Component/Bollywood/Bollywood";
import Hollywood from "./Component/Hollywood/Hollywood";
import Technology from "./Component/Technology/Technology";
import Fittness from "./Component/Fitness/Fittness";
import Food from "./Component/Food/Food";
import AllData from "./Data/AllData";
import { createContext,useState } from 'react'
export const contextApi = createContext();

function App() {
  const [data] = useState(AllData);
  return (
    <>
      <contextApi.Provider value={data}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Bollywood" element={<Bollywood/>}/>
        <Route path="/Hollywood" element={<Hollywood/>}/>
        <Route path="/Techonoly" element={<Technology/>}/>
        <Route path="/Fitness" element={<Fittness/>}/>
        <Route path="/Food" element={<Food/>}/>
      </Routes>
      </contextApi.Provider>
    </>
  );
}

export default App;
