import { useCard } from "../context/CartContext.jsx";
import shortenText, { productQuantity } from "../helpers/helpers.js";
import { GarbageIcon } from "../components/GarbageIcon.jsx";
import { BasketCard } from "../components/BasketCard.jsx";
import { Link } from "react-router-dom";
import { BasketSideBar } from "../components/BasketSideBar.jsx";

export const CheckoutPage = () => {
  const [state, dispatch] = useCard();

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };
  return (
    <>
      <div className=" flex w-full gap-4">
        <BasketSideBar state={state} clickHandler={clickHandler} />
        <div className="w-3/4 h-3/4">
          {!state.selectedItems.length && (
            <div className="flex items-center justify-center text-orange-500 w-full h-48">
              <Link
                to="/"
                className="border-2 border-orange-500 border-dashed px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                Empty - Go to Shopping
              </Link>
            </div>
          )}
          {state.selectedItems.map((item) => (
            <BasketCard key={item.id} item={item} clickHandler={clickHandler} />
          ))}
        </div>
      </div>
    </>
  );
};
