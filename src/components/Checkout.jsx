import React, {useState}from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

let grandTotal = 0;

const Checkout = () => {
  
    const state = useSelector (state => state.addItem)
    const [grandTotal, setgrandTotal] = useState(0)
  
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
      
      <td scope="col">{item.title}</td>
      <td scope="col">{item.quantity}</td>
      <td scope="col">{item.price}</td>
      <td scope="col">{getTotal(item.quantity, item.price)}</td>
      
      </tr>
      )
    }
  
  </tbody>
</table>
<h4>Grand Total is : {!GetGrandtotal()? "": GetGrandtotal()}</h4>
        </div>
    )
}

export default Checkout

function GetGrandtotal() {
  const state = useSelector(state => state.addItem)
  let grandTotal = 0;
  state.map(item=> {
    grandTotal += getTotal(item.quantity, item.price)
  })
  return grandTotal
}

function getTotal(quantity, price){
  let total = 0;
  let discount = 0.05;
  if( quantity > 5) {
       total = ((price * quantity)-(quantity* discount));
  }else{
    total = price * quantity
  }
  return total;
}