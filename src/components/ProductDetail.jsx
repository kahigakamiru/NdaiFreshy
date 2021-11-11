import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
const ProductDetail = () => {
    
    const proid = useParams();
    console.log(proid)
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    // console.log(product);
    const dispatch = useDispatch()
    const itemsInTheCart =  useSelector(state => state.addItem)
    console.log(itemsInTheCart);

    const handleCart = (product) => {
        
            dispatch(addItem(product))
            // console.log(itemsInTheCart);
            // if (cartBtn === "Add to Cart"){
            //     dispatch(addItem(product))
            //     setCartBtn("Add to Cart")
            // }else{
            //     dispatch(delItem(product))
            //     setCartBtn("Add to cart")
            // }
    }
    return (
       <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} height="300px"/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                   <h1 className="display-5 fw-bold">{product.title}</h1>
                   <hr />
                   <h3 className="my-4">Price : &nbsp;${product.price}</h3>
                    <p>Year of Manufacture: &nbsp; {product.year}</p>
                    <p>Manufacturer: &nbsp;{product.manufacturer}</p>
                    <p>Transmission: &nbsp;{product.transmission}</p>
                    <p>Tank Capacity: &nbsp;{product.TankCapacity}</p>
                    <p>Fuel consumption: &nbsp;{product.consumption}</p>
                    <p>Mileage: &#160;{product.mileage}</p>
                    <p>HorsePower: &nbsp;{product.power}</p>

{/*                     
                  {itemsInTheCart? itemsInTheCart.map(singleItem=>{
                      if(singleItem.id == proid){
                          return <div>
                      <button>-</button>
                      <span>{}</span>
                      <button>+</button>
                  </div>
                      }else{<button onClick={() =>handleCart(product)}className="btn btn-outline-primary my-5">Add to Cart</button>}
                  }):<button onClick={() =>handleCart(product)}className="btn btn-outline-primary my-5">Add to Cart</button>
                } */}
                <button onClick={() =>handleCart(product)}className="btn btn-outline-primary my-5">Add to Cart</button>
                   
                   
                </div>
            </div>
        </div>
       </>
    )
}

export default ProductDetail
