import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './resources/heading/Heading'
import Footer from './resources/footer/Footer'
import Shop from './resources/shop/Shop'
import ShoppingCard from './resources/shopping_card/ShoppingCard'
import Checkout from './resources/checkout/Checkout'



function App() {
  const [cart, setCart] = useState([]);
  const [filteredItem, setFilteredItem] = useState('');

  const removeFromCart = (clickedItem) => {
    const deleteIt = cart.filter((item) => item.id !== clickedItem.id)
    setCart(deleteIt);
  }
  //
  const handleFilterItem = (e)=>{
    setFilteredItem(e.target.value);
    //console.log(ed)
  }

  return (
    <Router basename='/shoppingCardDeploy'>
      <div>
        <Heading cart={cart}/>
        <div className='body'>
          <h2 className='main-title'>Shopping Cart with Route using React-Vite</h2>
          {/* filter prouduct ... */}
          <form id='filter_form' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' placeholder='Filter Products ...' value={filteredItem} onChange={handleFilterItem} />
            <button type='submit'>Filter</button>
          </form>
          <Routes>
            <Route path="/" element={<Shop cart={cart} setCart={setCart} filteredItem={filteredItem} />} />
            <Route path="/shopping-card" element={<ShoppingCard cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
