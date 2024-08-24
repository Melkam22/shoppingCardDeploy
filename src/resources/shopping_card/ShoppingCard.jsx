import React from 'react';
import './ShoppingCard.css'
import {useNavigate } from 'react-router-dom';

 

function ShoppingCard({cart, setCart, removeFromCart}) {
 
  const navigate = useNavigate();

  //

  return (
   <div className='cardFrame'>
    {cart.length === 0 ? (
      <h1>Your cart is empty <span onClick={()=> navigate('/')} style={{color: 'blue', cursor: 'pointer'}}>Shop Now</span></h1>// 
    ) : ( cart.map((item)=> (
      <div className='card' key={item.id}>
        <span>{item.description}</span>
        <span>{item.price}</span>
        <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    ))
  )}
{/* migrate items to checkout page */}

{cart.length > 0 && (
        <button className='checkoutBtn' onClick={()=> navigate('/checkout')}>To Checkout</button>
      )}
  
</div>
  
  )
}




export default ShoppingCard