import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import NonExistencePage from "./pages/NonExistencePage";
import FreeBoard from "./pages/FreeBoard";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/writing" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path={`/edit/:id`} element={<Edit />} />;
        <Route path="*" element={<NonExistencePage />} />
      </Routes>
    </div>
  );
}

export default App;
