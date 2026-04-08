import { Routes, Route } from "react-router-dom";  
import Home from "./Components/Home";
import Page from "./GamePage/Page";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    
  );
};

export default App;
