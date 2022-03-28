import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Reset from "./Components/Reset";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={Home }/>
        <Route path="/dashboard" element={Dashboard}/>
        <Route path="/reset" element={Reset }/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
