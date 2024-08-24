import './Checkout.css'
import { useNavigate } from 'react-router-dom'


function Checkout({cart, setCart}) {

    const navigate = useNavigate();
    

    if (!cart || cart.length === 0) {
        return <h3>Your cart is empty</h3>;
      }
    //
    const handlePay = () => {
        alert('Thank you for your purchase!');
        setCart([]);
        navigate('/shopping-card'); 
    }
  return (
    <div>
        <h2>Checkout</h2>
       
        {cart.map((item) => (
        <div className='checkoutItem' key={item.id}>
          <span> {item.description}</span>
          <span> {item.price}</span>
          {/* <button className='removeBtn' onClick={()=> removeFromCart(item.id)}>Remove</button> */}
        </div>
        
      ))}
       <span style={{fontWeight: 'bold', color: 'green'}}><span>Total:</span> {cart.reduce((item, accum)=> item + accum.price, 0)}</span><br /> <br />
      <button className='payBtn' onClick={handlePay}>Pay</button>
    </div>
  )
}


export default Checkout