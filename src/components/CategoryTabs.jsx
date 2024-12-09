import React from "react";
import './style/style.css';

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All Games", "Open World Games", "Multiplayer Games", "Competitive Games"];

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
