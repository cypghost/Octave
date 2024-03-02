import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";
import "../css/SearchPage.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query) => {
    setIsSearching(query.trim() !== ""); // Set isSearching based on whether there is content in the search bar
    const results = await fetchSearchResults(query);
    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <SearchBar onSearch={handleSearch} />
      <div className={`results ${isSearching ? "searching" : ""}`}>
        <SearchResults results={searchResults} isSearching={isSearching} />
      </div>
    </div>
  );
};

export default SearchPage;