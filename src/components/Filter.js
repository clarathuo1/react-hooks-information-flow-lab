import React from "react";

function Filter({ onCategoryChange, selectedCategory }) {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      <option value="all">All</option>
      <option value="groceries">Groceries</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      
    </select>
  );
}

export default Filter;