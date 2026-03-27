import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Hackathon from "./pages/Hackathon";
import Studyathon from "./pages/Studyathon";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/studyathon" element={<Studyathon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
