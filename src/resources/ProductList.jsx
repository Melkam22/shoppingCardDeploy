import React from 'react'
import Card from './Card';
import productsData from '../database/Data.json'

function ProductList() {
 

  return (
    <div>
      {productsData.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;