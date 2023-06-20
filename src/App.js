import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App h-100">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/register" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
