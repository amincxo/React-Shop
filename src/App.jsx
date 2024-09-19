import PageNotFund from "./pages/404";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./layout/Layout";

import ProductProvider from "./context/ProductContext";
import CardProvider from "./context/CardContext";

import { Routes , Route , Navigate } from "react-router-dom";


function App() {


  return (
      <CardProvider>
        <ProductProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" replace /> }  />
                    <Route path="/products" element={<ProductsPage/>}  />
                    <Route path="/products/:id" element={<DetailsPage/>}  />
                    <Route path="/checkout" element={<CheckoutPage/>}  />
                    <Route path="/*" element={<PageNotFund/>}  />
                </Routes>
            </Layout>
        </ProductProvider>
    </CardProvider>
  );
}

export default App
