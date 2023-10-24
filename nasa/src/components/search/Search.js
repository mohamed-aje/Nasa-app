import React, { useState } from "react";
import NasaApiService from "../../services/podService";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = async () => {
    try {
      const response = await NasaApiService.searchImages(query);
      if (response.collection && response.collection.items) {
        setSearchResults(response.collection.items);
        setCurrentPage(1);
      } else {
        console.error("Invalid API response:", response);
      }
    } catch (error) {
      console.error("Error searching images:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = Array.from(
    { length: Math.ceil(searchResults.length / itemsPerPage) },
    (_, index) => index + 1
  );

  return (
    <div className="container" id="library">
      <h1>Nasa Library </h1>
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="search-results">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.data[0].nasa_id} className="search-result-item">
                <a
                  href={
                    Array.isArray(item.links) && item.links.length > 0
                      ? item.links[0].href
                      : ""
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      Array.isArray(item.links) && item.links.length > 0
                        ? item.links[0].href
                        : ""
                    }
                    alt={
                      Array.isArray(item.data) && item.data.length > 0
                        ? item.data[0].title
                        : ""
                    }
                    className="search-result-image"
                  />
                </a>
                <p className="search-result-title">
                  {Array.isArray(item.data) && item.data.length > 0
                    ? item.data[0].title
                    : ""}
                </p>
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>

        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
