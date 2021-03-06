import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div classname="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        <h3>{user ? `Hello, ${user?.email}`:''}</h3>
                        Your Shopping Basket
                        
                        {basket.map(item => 
                          <CheckoutProduct 
                          key={item.id + 'hi'}
                          id={item.id} 
                          title={item.title}
                          image={item.image}
                          rating={item.rating}
                          price={item.price}
                          />  
                        )}
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
