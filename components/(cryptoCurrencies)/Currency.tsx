"use client";
import React, { useState } from "react";
import Headings from "../Headings";
import { FaSearch } from "react-icons/fa";
import AllCryptoCrurrency from "./AllCryptoCrurrency";

const Currency = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResult(search);
    setSearch("");
  };
  return (
    <div>
      <div className=" md:flex items-center gap-x-10">
        <Headings title="Crypto Currencies" />

        <form
          onSubmit={handleSearch}
          className=" border flex items-center bg-white rounded-full overflow-hidden lg:w-[500px]"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="write coin name eg.Bitcoin..."
            type="text"
            className="outline-none px-5 py-3 w-full"
          />
          <button
            type="submit"
            className=" bg-[#00224D] rounded-full text-white p-3"
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <AllCryptoCrurrency
        queryKey="allCoins"
        searchResult={searchResult}
        limit={"200"}
      />
    </div>
  );
};

export default Currency;
