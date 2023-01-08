import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";

const App = () => (
  <BrowserRouter>
    
      <Navbar />
      <Routes>
            <Route path="/" element={<Posts/> } />

      </Routes>
    
  </BrowserRouter>
);

export default App;