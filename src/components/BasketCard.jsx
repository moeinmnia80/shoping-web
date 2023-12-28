import shortenText from "../helpers/helpers.js";
import { GarbageIcon } from "./GarbageIcon.jsx";

export const BasketCard = ({ item, clickHandler }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-24 bg-white px-4 py-2 border-2 border-dashed border-orange-500 rounded-lg mb-4">
        <div className="w-fit h-full">
          <img
            src={item.image}
            alt=""
            className="w-fit h-full object-contain"
          />
        </div>
        <p className="w-fit">{shortenText(item.title)}</p>
        <div className="flex">
          {item.quantity === 1 && (
            <button
              onClick={() => clickHandler("REMOVE_ITEM", item)}
              className="flex justify-center items-center w-7 h-7 text-white p-1 bg-orange-500 rounded-lg"
            >
              <GarbageIcon />
            </button>
          )}
          {item.quantity > 1 && (
            <button
              onClick={() => clickHandler("DECREASE", item)}
              className="flex justify-center items-center w-7 h-7 text-white p-1 bg-orange-500 rounded-lg"
            >
              -
            </button>
          )}
          <p className="w-7 h-7 leading-7 text-center border-2 border-gray-300 rounded-lg mx-1">
            {item.quantity}
          </p>
          <button
            onClick={() => clickHandler("INCREASE", item)}
            className="flex justify-center items-center w-7 h-7 text-white p-1 bg-orange-500 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
