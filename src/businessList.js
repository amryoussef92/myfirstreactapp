import React from "react";
import Business from "../src/Business.js"; // Assuming the Business component is in a separate file
import Styles from "../src/SearchBar.module.css";
const BusinessList = () => {
  return (
    <div className={Styles.BusinessList}>
      <Business />
      <Business />
      <Business />
    </div>
  );
};

export default BusinessList;
