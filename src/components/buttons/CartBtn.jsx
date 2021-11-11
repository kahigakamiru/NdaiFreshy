import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const gari = useSelector(state => state.addItem)
    //const itemsInTheCart =  useSelector(state => state.addItem)
    //console.log(itemsInTheCart)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1">Cart({gari.length})</span>
            </NavLink>
        </>
    )
}

export default CartBtn
