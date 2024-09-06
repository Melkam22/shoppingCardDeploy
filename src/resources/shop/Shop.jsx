import './Shop.css'
import {useEffect, useState} from 'react'
import Products from '../../database/Data.json'
import Cards from '../cards/Cards'

 

function Shop({cart, setCart}) {
    // const [products] = useState(Products.products)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      setProducts(Products.products);
      setLoading(false);
    },[])
console.log(Products)
    //add to cart
    const addToCart = (clickedItem)=>{
      setCart([...cart, clickedItem])
    }
    //console.log(cart)


  return (
    <div>
       {loading ? <h1>Products are Loading...</h1> : <Cards products={products} addToCart={addToCart} />} 
    </div>
  )
}

export default Shop