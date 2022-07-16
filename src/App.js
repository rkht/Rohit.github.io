import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Headers from './components/Headers';
function App() {
  return (
    <>
    <Headers/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>   
      <Route path="/menu" element={<Menu />}/>    
      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
