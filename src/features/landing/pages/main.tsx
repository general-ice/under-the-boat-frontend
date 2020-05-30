import React from 'react'
import {MainTemplate} from "features/landing/templates/main"
import {NavLink} from "react-router-dom";

export const MainPage = () => {
    return <MainTemplate appName="Under the boat">
        <div className="form d-flex container justify-content-center">
            <div className="row col-6">
                <NavLink className="col-5 my-1 btn btn-primary" to="/rooms">to boat</NavLink>
                <div className="col-2"/>
                <NavLink className="col-5 my-1 btn btn-primary" to="/rules">rules</NavLink>
            </div>
        </div>
    </MainTemplate>
}