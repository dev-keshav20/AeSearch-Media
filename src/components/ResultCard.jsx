import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
   <div className="relative group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition duration-300">

  <a href={item.url} target="_blank" className="block h-72">

    {item.type === "photo" || item.type === "gif" ? (
      <img
        src={item.src}
        className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
      />
    ) : (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
      />
    )}

  </a>

  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

  <div className="absolute bottom-0 p-4 w-full flex justify-between items-center text-white">
    
    <h2 className="text-sm md:text-base font-semibold line-clamp-2">
      {item.title}
    </h2>

    <button
      onClick={() => addToCollection(item)}
      className="bg-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
    >
      Save
    </button>
  </div>
</div>
  );
};

export default ResultCard;
