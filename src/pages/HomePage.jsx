import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
        <Navbar/>
      <SearchBar />
      {query != "" ? (
        <div>
          {" "}
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
