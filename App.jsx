import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound"; // Import the PageNotFound component
import AppLayout from "./pages/AppLayout"; // Import the AppLayout component
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities(){
      try{
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      }catch(err){
        alert("Error fetching cities data");

      }finally{
        setIsLoading(false);
        }

    }
    fetchCities();

  },[]);
return (
<BrowserRouter>
<Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />} >
      <Route index element={<CityList cities={cities} isLoading={isLoading}/>} /> 
      <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
      <Route path='cities/:id' element={<City />} />
      <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
      <Route path="form" element={<p>Form Element </p>}/>
      
      </Route>

       <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound/>} /> {/* Added About route */}
      {/* Define your routes here */}

    </Routes> 
</BrowserRouter>
// One more commit for good luck and testing if everything works as it should

);
}

export default App;
