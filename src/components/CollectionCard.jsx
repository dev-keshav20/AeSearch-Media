import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div className="relative group w-full h-72 md:h-80 rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition duration-300">
      
   
      {(item.type === "photo" || item.type === "gif") && (
        <img
          loading="lazy"
          src={item.src || item.thumbnail}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />
      )}

  
      {item.type === "video" && (
        <>
          <img
            src={item.thumbnail}
            className="h-full w-full object-cover group-hover:opacity-0 transition"
          />

          <video
            src={item.src}
            muted
            loop
            playsInline
            preload="none"
            className="absolute top-0 left-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
          />
        </>
      )}

  
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>


      <div className="absolute bottom-0 p-4 w-full flex justify-between items-center text-white">
        
        <h2 className="text-sm md:text-base font-semibold line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={removeItem}
          className="bg-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;