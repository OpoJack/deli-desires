import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Original from "./pages/original";

function App() {
  return (
    <BrowserRouter>
      <Original />
    </BrowserRouter>
  );
}

export default App;
