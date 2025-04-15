import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound"; // Import the PageNotFound component
function App() {
  return (
    <BrowserRouter>
      <>
        <h2> World Wise</h2> 
        {/* This part the World Wise is shown on all pages regardless according to its postioning */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound/>} /> {/* Added About route */}
          {/* Define your routes here */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;