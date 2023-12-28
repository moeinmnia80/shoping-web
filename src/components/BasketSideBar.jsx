export const BasketSideBar = ({ state, clickHandler }) => {
  const { itemsCounter, total, checkout } = state;

  return (
    <>
      <div className="w-1/4 h-3/4 bg-white border-2 border-dashed border-orange-500 rounded-lg p-4">
        <div className="flex w-full text-orange-500">
          Total:
          <p className="text-gray-400 ml-2"> ${total}</p>
        </div>
        <div className="flex w-full text-orange-500">
          Quantity:
          <p className="text-gray-400 ml-2"> {itemsCounter}</p>
        </div>
        <div className="flex w-full text-orange-500">
          Checkout:
          <p className="text-gray-400 ml-2">
            {" "}
            {checkout ? "completed" : "pending ..."}
          </p>
        </div>
        <button
          className={`w-full text-white bg-orange-500 rounded-md py-2 mt-12 hover:bg-orange-200 hover:text-orange-500 transition-all ${
            !state.selectedItems.length &&
            `opacity-40 hover:bg-orange-500 hover:text-white cursor-no-drop`
          }`}
          onClick={() => clickHandler("CHECKOUT", state.selectedItems)}
        >
          Checkout
        </button>
      </div>
    </>
  );
};
