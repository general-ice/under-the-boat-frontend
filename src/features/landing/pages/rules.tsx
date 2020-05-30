import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import {NavLink} from "react-router-dom";

export const Rules = () => {
    return <Jumbotron fluid>
        <div className="container">
            <h1>Rules</h1>
            <p>
                Game rules will be here late
            </p>
            <NavLink to="/" className="btn btn-secondary">to Main</NavLink>
        </div>
    </Jumbotron>
}