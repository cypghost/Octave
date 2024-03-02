import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the query to the parent component for fetching results
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
