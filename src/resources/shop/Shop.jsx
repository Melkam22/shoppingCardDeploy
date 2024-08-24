import './Shop.css'
import { useState } from 'react'
import Products from '../database/Data.json'
import Cards from '../cards/Cards'

 

function Shop({cart, setCart}) {
    const [products] = useState(Products.products)
    //const [cart, setCart] = useState([])//importing from App.jsx inseted of doing it here ...
    //console.log(products)

    //add to cart
    const addToCart = (clickedItem)=>{
      setCart([...cart, clickedItem])
    }
    //console.log(cart)


  return (
    <div>
        <Cards products={products} addToCart={addToCart}/>
    </div>
  )
}

export default Shop