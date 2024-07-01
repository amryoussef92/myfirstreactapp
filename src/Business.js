import React from "react";
import Styles from "../src/Business.module.css";
const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};
function Business() {
  return (
    <div className={Styles.Business}>
      <div className={Styles.imageContainer}>
        <img src={business.imageSrc} alt="Restaurant" />
      </div>
      <h2 className="business-name">{business.name}</h2>
      <div className={Styles.BusinessAddress}>
        <p className="address">{business.address}</p>
        <p className="city-state-zip">{business.zipCode}</p>
        <p className="category">{business.category}</p>
        <div className="rating">
          <img src="star_icon.png" alt="Rating" />
          <p className={Styles.rating}>{business.rating}</p>
        </div>
        <p className="review-count">{business.reviewCount} reviews</p>
      </div>
    </div>
  );
}

export default Business;
