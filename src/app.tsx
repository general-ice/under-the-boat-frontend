import React from 'react'
import {MemoryRouter, Switch} from 'react-router-dom'
import {MainGrid} from "ui/core/main-grid";
import {LandingRoute} from 'features/landing/routes';
import 'ui/sass/index.sass'

export function App () {
    return <MainGrid>
        <MemoryRouter>
            <Switch>
                <LandingRoute path="/"/>
            </Switch>
        </MemoryRouter>
    </MainGrid>
}