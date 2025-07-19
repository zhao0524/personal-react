import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
