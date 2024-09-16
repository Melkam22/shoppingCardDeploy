import React from 'react';
import Card from './Card';
import productsData from '../database/Data.json';

function ProductList() {
  const addToCart = (product) => {
    console.log(`${product.description} added to cart!`);
  };

  return (
    <div>
      {productsData.products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;