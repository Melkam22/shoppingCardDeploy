import './Cards.css'
import Card from '../card/Card'

function Cards({products, addToCart}) {


    return (   
        <div className='shoppingCardFrame'>
         {products.map((product)=> (
            <Card key={product.id} product={product} addToCart={addToCart} />
        )
         
        )}
         </div>
        )
}

export default Cards



