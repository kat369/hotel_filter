"use client";
import React, { useEffect, useState } from "react";
import { items } from "./data";



export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["motel", "suithotel", "inn", "residancy"];
  let ratings = [1,2,3,4,5]

  const handleFilterButtonClick = (selectedCategory:any) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory || item.rating === selectedCategory);
        return temp;
      });
     
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };


  return (
    <>
      <div className="cont">
        <div className="side">
        <h1>cartogory</h1>
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
        <h1>Rating</h1>
        {ratings.map((rating, idx) => (
          <button
            onClick={() => handleFilterButtonClick(rating)}
            className={`button ${
              selectedFilters?.includes(rating) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {rating}
          </button>
        ))}
   
    
   
        </div>
        <div className="mid">

        <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>Name:{item.name}</p>
            <p className="category">Cartogary:{item.category}</p>
            <p className="category">Rating:{item.rating}</p>
           
          </div>
        ))}
      </div>

        </div>
      </div>
    </>
  );
}
