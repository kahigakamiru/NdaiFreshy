import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'

function Search() {

    const search = useSelector(state => state.search)
    console.log(search)
    return (
        <div className='search-car'>
            {search.map(car=> (
               
                <div class="card my-5 py-4" key={car.id} style={{width: "18rem", display: "flex-wrap"}}>
                <img src={car.img} class="card-img-top" alt={car.title} />
                <div class="card-body text-center ">
                   <h5 class="card-title">{car.title}</h5>
                     <p className="lead">${car.price}</p>
                     <NavLink to={`/products/${car.id}`} class="btn btn-outline-primary">view car</NavLink>
                </div>
              </div>
            
            ))}
            
        </div>
    )
}

export default Search
