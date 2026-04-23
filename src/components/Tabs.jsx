import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
   <div className="flex justify-center gap-4 md:gap-8 px-4 py-6 bg-black">
  {tabs.map((elem, idx) => (
    <button
      key={idx}
      onClick={() => dispatch(setActiveTab(elem))}
      className={`px-5 py-2 rounded-full text-sm md:text-base transition-all uppercase
        ${
          activeTab === elem
            ? "bg-blue-600 text-white shadow-lg scale-105"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
    >
      {elem}
    </button>
  ))}
</div>
  );
};

export default Tabs;
