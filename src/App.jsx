import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './resources/heading/Heading'
import Footer from './resources/footer/Footer'
import Shop from './resources/shop/Shop'
import ShoppingCard from './resources/shopping_card/ShoppingCard'
import Checkout from './resources/checkout/Checkout'
//for detail page ...
import Product1 from './resources/productDetails/Product/1';
import Product2 from './resources/productDetails/Product/2';
import Product3 from './resources/productDetails/Product/3';
import Product4 from './resources/productDetails/Product/4';
import Product5 from './resources/productDetails/Product/5';
import Product6 from './resources/productDetails/Product/6';
import Product7 from './resources/productDetails/Product/7';
import Product8 from './resources/productDetails/Product/8';



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

            {/* for detail page ... */}
            <Route path='/product/1' element={<Product1 />} />
            <Route path='/product/2' element={<Product2 />}/>
            <Route path='/product/3' element={<Product3 />}/>
            <Route path='/product/4' element={<Product4 />}/>
            <Route path='/product/5' element={<Product5 />}/>
            <Route path='/product/6' element={<Product6 />}/>
            <Route path='/product/7' element={<Product7 />}/>
            <Route path='/product/8' element={<Product8 />}/>
           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
