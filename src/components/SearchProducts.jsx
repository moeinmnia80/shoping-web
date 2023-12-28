import { useEffect, useState } from "react";
import { SearchIcon } from "./SearchIcon.jsx";
import { createQueryObject } from "../helpers/helpers.js";

export const SearchProducts = ({ search, setSearch, setQuery }) => {
  const searchHandler = (e) => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="flex justify-start mb-4">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="search products ..."
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className=" border-2 border-dashed border-orange-500 rounded-lg outline-none mr-2 px-2"
      />
      <button onClick={searchHandler}>
        <SearchIcon style="w-8 h-8 p-1 bg-orange-500 text-white rounded-lg" />
      </button>
    </div>
  );
};
