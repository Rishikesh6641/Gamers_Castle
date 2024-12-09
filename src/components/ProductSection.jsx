import React from "react";
import CategoryTabs from "./CategoryTabs";
import ProductGrid from "./ProductGrid";
import './style/style.css';
import Section from './Section';

const ProductSection = ({ games, selectedCategory, setSelectedCategory }) => {
  return (
    
    <div>
   
    <Section /> 
    <div className="product-section">
      <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductGrid games={games} selectedCategory={selectedCategory} />
    </div>
    </div>
  );
};

   
   

export default ProductSection;
