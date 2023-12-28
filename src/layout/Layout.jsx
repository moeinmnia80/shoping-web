import { ShopIcon } from "../components/ShopIcon.jsx";
import { Link } from "react-router-dom";
import { useCard } from "../context/CartContext.jsx";

const Layout = ({ children }) => {
  const [state] = useCard();
  return (
    <div className="container">
      <header className="">
        <div className="flex items-center justify-between text-white bg-orange-500 rounded-lg p-4 mt-4">
          <Link to="/" className="font-bold text-xl">
            Botostart
          </Link>
          <Link to="/checkout" className="relative">
            <ShopIcon style="w-8 h-8 bg-white text-orange-500 p-1 rounded-md" />
            {state.itemsCounter > 0 && (
              <span className="flex items-center justify-center absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 w-5 h-5 bg-black rounded-full text-sm">
                {state.itemsCounter}
              </span>
            )}
          </Link>
        </div>
      </header>
      <main className="flex flex-col justify-center mt-4">{children}</main>
      <footer className="flex items-center justify-center text-white bg-orange-500 rounded-lg p-4 my-4">
        <p>Developed By 💖</p>
      </footer>
    </div>
  );
};
export default Layout;
