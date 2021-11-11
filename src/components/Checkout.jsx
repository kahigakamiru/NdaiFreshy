import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
let grandTotal = 0;
const Checkout = () => {
  
    const state = useSelector (state => state.addItem)
    console.log(state)
  
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Quantity{}</th>
      <th scope="col">price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    {state.map(item => <tr>
      <th scope="col">{item.title}</th>
      <th scope="col">{item.quantity}</th>
      <th scope="col">{item.price}</th>
      <th scope="col">{getTotal(item.quantity, item.price)}</th>
    </tr>)}
  
  </tbody>
</table>
{grandTotal}
        </div>
    )
}

export default Checkout


function getTotal(quantity, price){
  let total = 0;
  let discount = 0.05;
  if( quantity > 5) {
       total = (price * discount * quantity);
  }else{
    total = price * quantity
  }

grandTotal+=total;
  return `$${total}`;
}