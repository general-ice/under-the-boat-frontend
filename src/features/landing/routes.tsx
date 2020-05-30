import React from 'react'
import {Route} from 'react-router-dom'
import {MainPage, Rules, Rooms} from "./pages";
import {FeatureRouter} from "lib/react";

export const LandingRoute = FeatureRouter(({getChildPath, path}) => {

    console.log(path);

    return <React.Fragment>
        <Route path={getChildPath('rules')} exact component={Rules} />
        <Route path={getChildPath('rooms')} exact component={Rooms}/>
        <Route path="/" exact component={MainPage}/>
    </React.Fragment>
})