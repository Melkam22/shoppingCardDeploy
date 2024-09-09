import './Heading.css'
import {Link} from 'react-router-dom'
import BasketGreen from '/basketGreen.png'
import myIcon from '/eComerceIcon.png'

function Heading({cart}) {
  
console.log('heading', cart);
   // Calculate the total number of items in the cart & show it on the icon ...
    const cartItemCount = cart.length;
    //console.log('number of items in cart:',cartItemCount);

  return (
    <div className='heading'>
      <Link to="/"><img className='logo' src={myIcon} alt="hands embracing heart" /></Link> 
      <Link to='/shopping-card'>
      <img className='basket' src={BasketGreen} alt="basket" /> 
       {/* Display cart item count if there are items in the cart */}
       {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </Link>
    </div>
    
  )
}

export default Heading