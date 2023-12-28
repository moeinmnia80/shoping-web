import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductsDetail } from "../context/ProductsContext.jsx";
import { Loader } from "../components/Loader.jsx";
import Layout from "../layout/Layout.jsx";
import { CategoryIcon } from "../components/CategoryIcon.jsx";
import { PriceIcon } from "../components/PriceIcon.jsx";
export const ProductsDetailPage = () => {
  const { id } = useParams();
  const productsDetail = useProductsDetail(+id);
  if (!productsDetail) return <Loader />;
  const { image, title, description, category, price } = productsDetail;

  return (
    <>
      <div className="flex h-screen">
        <div className="flex self-center items-center justify-center w-full h-3/4 bg-white border-2 border-dashed border-orange-500 rounded-xl overflow-hidden">
          <div className="flex items-center justify-center w-1/4 h-full px-4 py-2 border-r-2 border-dashed border-gray-300">
            <img src={image} alt="" className="w-fit h-1/2 object-contain" />
          </div>
          <div className="flex flex-col justify-between relative w-3/4 h-full py-4 px-8">
            <h1 className="text-orange-500 font-extrabold">{title}</h1>
            <p className="text-gray-400">{description}</p>
            <div>
              <span className="flex items-center justify-start mb-2">
                <CategoryIcon style="w-6 h-6 mr-2 stroke-orange-500" />
                <p className="leading-none text-center">{category}</p>
              </span>
              <span className="flex items-center justify-start">
                <PriceIcon style="w-6 h-6 text-orange-500 mr-2" />
                <p>${price}</p>
              </span>
            </div>
            <Link
              className="absolute bottom-4 right-8 text-white bg-orange-500 rounded-md px-4 py-1 hover:bg-orange-200 hover:text-orange-500 transition-all"
              to="/"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
