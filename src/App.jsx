import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/runners_shop/" element={<Home />} />
        <Route path="/runners_shop/product/" element={<Product />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;