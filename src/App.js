import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/Pracipal" element={<PrincipalPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
