import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/SearchResult.css";

const SearchResults = ({ results, isSearching }) => {
  if (isSearching && (!results || results.length === 0)) {
    return (
      <div className="res">
        <p>No music found.</p>
      </div>
    );
  } else if (isSearching) {
    return (
      <div className="res">
        <ul>
          {results.map((result) => (
            <li key={result.artist}>
              <Link
                to={`/now-playing/${result.id}`}
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default SearchResults;
