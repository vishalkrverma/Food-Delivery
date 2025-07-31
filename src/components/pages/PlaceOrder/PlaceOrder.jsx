// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {
  
//   const {getTotalCartAmount}=useContext(StoreContext);


//   return (
//    <form className='place-order'>
//     <div className="place-order-left">
//    <p className="title">Delivery Information</p>
//    <div className="multi-fields">
//     <input type='text' placeholder='First name'/>
//     <input type='text' placeholder='Last name'/>
//    </div>
//    <input type='email' placeholder='Email address'/>
//    <input type='text' placeholder='Street'/>
//    <div className="multi-fields">
//     <input type="text" placeholder='City'/>
//     <input type="text" placeholder='State'/>
//    </div>

//    <div className="multi-fields">
//     <input type="text" placeholder='Zip Code'/>
//     <input type="text" placeholder='Country'/>
//    </div>
//    <input type="text" placeholder='Phone'/>
//     </div>
//     <div className="place-order-right">
//       <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div className="cart-total-details">
//             <p>Subtotal</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <hr />
//           <div className="cart-total-details">
//             <p>Delivery Fee</p>
//             <p>${deliveryFee.toFixed(2)}</p>
//           </div>
//           <hr />
//           <div className="cart-total-details">
//             <b>Total</b>
//             <b>${total.toFixed(2)}</b>
//           </div>
//           <button onClick={()=>navigate('/order')} className="checkout-btn">Proceed To Payment</button>
//         </div>
//     </div>
//    </form>
//   )
// }

// export default PlaceOrder
import React, { useContext, useEffect } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          {subtotal === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is empty.</p>
              <button
                type="button"
                className="checkout-btn"
                onClick={() => navigate('/')}
              >
                Go to Menu
              </button>
            </div>
          ) : (
            <>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${deliveryFee.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${total.toFixed(2)}</b>
              </div>
              <button
                type="button"
                onClick={() => navigate('/order')}
                className="checkout-btn"
              >
                Proceed To Payment
              </button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
