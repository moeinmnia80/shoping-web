import { Link, useNavigate } from "react-router-dom";
import { DocumentIcon } from "./DocumentIcon.jsx";
import { useState } from "react";
import shortenText, { productQuantity } from "../helpers/helpers.js";
import { ShopIcon } from "./ShopIcon.jsx";
import { useCard } from "../context/CartContext.jsx";
import { GarbageIcon } from "./GarbageIcon.jsx";

export const Card = ({ data }) => {
  const { id, title, price, image } = data;
  const [status, setStatus] = useState(false);
  const [state, dispatch] = useCard();

  const quantity = productQuantity(state, id);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
    setStatus((status) => !status);
  };
  return (
    <>
      <div className="flex flex-col justify-between bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 shadow">
        <div className="flex items-center justify-center w-full h-[15rem] overflow-hidden mb-4">
          <img
            src={image}
            alt="products img"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-orange-500 font-bold">{shortenText(title)}</h1>
        <p className="font-bold mb-4">$ {price}</p>
        <div className="flex justify-between items-center">
          <Link to={`/products/${id}`}>
            <DocumentIcon style="w-7 h-7 text-white bg-orange-500 rounded-md p-1" />
          </Link>
          <div className="flex">
            {quantity === 1 && (
              <button
                onClick={() => clickHandler("REMOVE_ITEM")}
                className="w-7 h-7 text-white bg-orange-500 rounded-md p-1"
              >
                <GarbageIcon />
              </button>
            )}
            {quantity > 1 && (
              <button
                onClick={() => clickHandler("DECREASE")}
                className="w-7 h-7 text-white bg-orange-500 rounded-md p-1"
              >
                -
              </button>
            )}

            {quantity === 0 ? (
              <button
                onClick={() => clickHandler("ADD_ITEM")}
                className="w-7 h-7 text-white bg-orange-500 rounded-md p-1"
              >
                <ShopIcon style="" />
              </button>
            ) : (
              <>
                <span className="flex items-center justify-center w-7 h-7 border-2 border-[#eee] rounded-lg mx-1">
                  {state.selectedItems.map((item) =>
                    item.id === data.id ? item.quantity : null,
                  )}
                </span>
                <button
                  onClick={() => clickHandler("INCREASE")}
                  className="w-7 h-7 text-white leading-none bg-orange-500 rounded-md p-1"
                >
                  +
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
