import './detailStyle.css'


function Product1() {

return (   
    <div className='detail'>
    <h1>T-Shirt Details</h1>
    <ul>
  <img src="../assets/images/t-shirt.jpg" alt="T-Shirt" style={{width:"250px", height:"220px"}}/>
      <li>Color: Red with Orange Dots</li>
      <li>Size: XL</li>
      <li>Material: Cotton</li>
      <li>Description: A nice t-shirt</li>
      <li>this is going to be the detailed product description for T-shirt</li>
      <li>Price: 25€</li>
      
    </ul>

    <a className='backBtn' href="/">back</a>
  </div>
)
}

export default Product1