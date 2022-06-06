import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Original from "./pages/original";
import New from "./pages/new";

function App() {
  return (
    <BrowserRouter basename={"/deli-desires/"}>
      <Routes>
        <Route path='/' element={<Original />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
