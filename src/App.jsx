import React from "react";
import { fetchGif, fetchPhotos, fetchVideos } from "./api/mediaApi";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import { Bounce, ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">

<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/collection" element={<CollectionPage/>} />
</Routes>

<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>


  
    </div>
  );
};

export default App;
