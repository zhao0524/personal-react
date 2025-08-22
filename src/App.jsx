import { Home } from "./pages/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/Notfound";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
