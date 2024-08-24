import './Card.css'

 

function Card({product, addToCart}) {


return (   
<div >
 <ul className='shoppingCard' key={product.id}>
            <li>{product.description}</li> 
             <li>{product.price}</li>  
             <li>{product.size}</li> 
              <li>{product.material}</li> 
             <li>{product.description}</li> 
             <li>{product.longDesc}</li> 
              <img src={product.imgUrl} alt={product.id} width="130px"/>
              <button onClick={() => addToCart(product)}>Add to cart</button>
              </ul>
 </div>
)
}

export default Card

