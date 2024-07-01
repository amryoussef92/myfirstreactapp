import React from "react";
import Business from "../src/Business.js";
import BusinessList from "../src/businessList.js";
import SearchBar from "../src/SearchBar.js";
import Styles from "../src/App.module.css";

const App = () => {
  return (
    <div className={Styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
      <BusinessList />
      <BusinessList />
    </div>
  );
};

export default App;
