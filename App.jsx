import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound"; // Import the PageNotFound component
import AppLayout from "./pages/AppLayout"; // Import the AppLayout component
import Login from "./pages/Login";

function App() {
  return (
<BrowserRouter>
<Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />} />
       <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound/>} /> {/* Added About route */}
      {/* Define your routes here */}
    </Routes>
</BrowserRouter>
  );
}

export default App;
