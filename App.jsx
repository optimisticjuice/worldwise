import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound"; // Import the PageNotFound component
function App() {
  return (
<BrowserRouter>
<Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<PageNotFound/>} /> {/* Added About route */}
      {/* Define your routes here */}
    </Routes>
</BrowserRouter>
  );
}

export default App;