import PageNotFund from "./pages/404";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import ProductsPage from "./pages/ProductsPage";

import ProductProvider from "./context/ProductContext";
import { Routes , Route , Navigate } from "react-router-dom";
import CardProvider from "./context/CardContext";


function App() {


  return (
    <CardProvider>
        <ProductProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace /> }  />
                <Route path="/products" element={<ProductsPage/>}  />
                <Route path="/products/:id" element={<DetailsPage/>}  />
                <Route path="/checkout" element={<CheckoutPage/>}  />
                <Route path="/*" element={<PageNotFund/>}  />
            </Routes>
        </ProductProvider>
    </CardProvider>
  );
}

export default App
