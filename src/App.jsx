import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Footer from './components/Footer';
import ProductPage from "./pages/ProductPage"; 
import CartPage from "./pages/CartPage";  
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
        <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Navbar />
       <SecondaryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
           {/* Dynamic route for all categories */}
        <Route path="/product/:categorySlug" element={<ProductPage />} /> 
        <Route path="/cart" element={<CartPage />} /> 
            <Route path="/login" element={<LoginPage />} />
        
       
      </Routes>
        <Footer />
             </CartProvider>
    </Router>
  );
}

export default App;
