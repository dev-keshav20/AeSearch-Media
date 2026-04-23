import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setQuery } from "../features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  function submitHandler(e){
      e.preventDefault();
        dispatch(setQuery(text));
        setText("");
  }

  return (
    <form
  onSubmit={submitHandler}
  className="bg-black flex justify-center px-4 py-6"
>
  <div className="flex w-full max-w-3xl bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
    
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="flex-1 px-4 py-3 bg-transparent text-white outline-none"
      placeholder="Search photos, videos, gifs..."
    />

    <button className="bg-blue-600 px-6 hover:bg-blue-700 transition cursor-pointer">
      🔍
    </button>
  </div>
</form>
  );
};

export default SearchBar;
