import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                          fficia laboris aliquip amet tempor id veniam est velit ut nostrud non mollit nostrud cillum. 
                          Quis voluptate adipisicing proident aliquip cupidatat non reprehenderit enim. Id esse minim aute aliquip in pariatur cillum eu. Ex sunt non 
                          irure do anim in reprehenderit esse. 
                          Aliqua deserunt laborum aliquip velit nisi. 
                          Dolor cupidatat est nostrud fugiat labore. 
                          Excepteur enim ullamco sint aliquip nisi officia.
                        </p>
                        <NavLink to="/contact" className="
                        btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="../carlogo.jpg" alt="About Us" height="500px" width="500px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
