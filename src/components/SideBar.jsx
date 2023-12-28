import { CategoryIcon } from "./CategoryIcon.jsx";
import { createQueryObject } from "../helpers/helpers.js";
import categories from "../constant/categories.js";

export const SideBar = ({ query, setQuery }) => {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase().trim();
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="hidden md:flex flex-col sticky top-4 w-[calc(1/4-1rem)] h-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-4">
      <h1 className="flex text-orange-500 font-bold">
        <CategoryIcon style="w-6 h-6 font-bold mr-2" />
        Categories
      </h1>
      <ul
        className="flex flex-col items-start"
        onClick={(e) => categoryHandler(e)}
      >
        {categories.map((c) => (
          <li
            key={c.id}
            className={`my-2 hover:text-orange-500 cursor-pointer w-full text-left py-1 px-2 rounded-md ${
              query.category === c.type.toLowerCase()
                ? `text-white bg-orange-500 hover:text-white`
                : null
            }`}
          >
            {c.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
