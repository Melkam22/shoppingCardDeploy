import './Cards.css'
import Card from '../card/Card'

function Cards({products, addToCart}) {


    return (   
        <div className='shoppingCardFrame'>
         {products.map((product)=> {return(
            <Card product={product} addToCart={addToCart} />
        )}
         
        )}
         </div>
        )
}

export default Cards



