import { useProducts } from "../context/ProductsContext.jsx";
import { SearchProducts } from "../components/SearchProducts.jsx";
import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { Card } from "../components/Card.jsx";
import { Loader } from "../components/Loader.jsx";
import {
  filterProducts,
  getInitialQuery,
  searchProduct,
} from "../helpers/helpers.js";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
  const products = useProducts();

  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setProductsData(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearch(query.search || "");
    setSearchParams(query);
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setProductsData(finalProducts);
  }, [query]);

  return (
    <>
      <SearchProducts
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
      />
      <div className="flex justify-between w-full">
        <div
          className={`grid ${
            !!productsData.length && `grid-cols-3 gap-4`
          } mr-2 w-3/4`}
        >
          {!products.length && <Loader style="col-span-3 self-center" />}
          {!productsData.length && (
            <p className="flex items-center justify-self-center h-[64vh]">
              Nothing To Show
            </p>
          )}
          {productsData.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};
