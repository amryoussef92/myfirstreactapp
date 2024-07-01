import React from "react";
import Styles from "../src/SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={Styles.SearchBar}>
      <div className={Styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={Styles.SearchBarFields}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className={Styles.SearchBarSubmit}>
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
