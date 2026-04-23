import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";
import { clearCollection } from "../features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };
  return (
   <div className="bg-black min-h-screen text-white">
  <Navbar />

  <div className="px-5 md:px-10 py-6">

    {collection.length > 0 ? (
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Your Collection
        </h2>

        <button
          onClick={clearAll}
          className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Clear Collection
        </button>
      </div>
    ) : (
      <div className="text-center py-20 text-gray-400 text-xl">
        No items saved yet 😐
      </div>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {collection.map((item, idx) => (
        <CollectionCard key={idx} item={item} />
      ))}
    </div>

  </div>
</div>
  );
};

export default CollectionPage;
