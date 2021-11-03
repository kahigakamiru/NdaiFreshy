import React from 'react'
import {useSelector} from 'react-redux'

function Search() {

    const search = useSelector(state => state.search)
    
    return (
        <div>
            {search.map(car=> {
                <p>{car.model}</p>
            })}
            
        </div>
    )
}

export default Search
