import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config.js";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductsContext);
};

const useProductsDetail = (id) => {
  const products = useContext(ProductsContext);
  return products.find((p) => p.id === id);
};
export default ProductsProvider;
export { useProducts, useProductsDetail };
