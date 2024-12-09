import React from "react";
import { Link } from "react-router-dom"; 
import './style/style.css';

const ProductCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className="product-card"> 
      <div className="product-card">
        <img src={game.image} alt={game.name} />
        <h3>{game.name}</h3>
        <p>
          <span className="rating">⭐ {game.rating}</span>
          <span className="reviews">Reviews ({game.reviews})</span>
        </p>
      </div>
      
    </Link>
  );
};

export default ProductCard;
