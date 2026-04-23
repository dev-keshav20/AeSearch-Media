import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTab,
  setError,
  setLoading,
  setQuery,
  setResults,
} from "../features/searchSlice";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const cache = {};

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());

        const key = query + activeTab;

        if (cache[key]) {
          dispatch(setResults(cache[key]));
          return;
        }

        let data = [];

        if (activeTab === "photos") {
          let res = await fetchPhotos(query);

          data = res.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.thumb,
            src: item.urls.regular,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          let res = await fetchVideos(query,16);

          data = res.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          let res = await fetchGif(query, 20);

          data = res.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "Gif",
            thumbnail: item.images.fixed_height_small.url,
            src: item.images.original.url,
            url: item.url,
          }));
        }

        cache[key] = data;
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Something went Wrong..😕</h1>;
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-5 py-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-72 bg-gray-800 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-6 bg-black min-h-screen">
      {results.map((item, idx) => (
        <ResultCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
