import React from "react";
import ProductCard from "./ProductCard";
import './style/style.css';

const ProductGrid = ({ games, selectedCategory }) => {
  const filteredGames =
    selectedCategory === "All Games"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  return (
    <div className="product-grid">
      {filteredGames.map((game) => (
        <ProductCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default ProductGrid;
