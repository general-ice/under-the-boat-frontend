import React, {useState} from 'react'
import {MemoryRouter, Switch} from 'react-router-dom'
import {MainGrid} from "ui/core/main-grid";
import {LandingRoute} from 'features/landing/routes';
import 'ui/sass/index.sass'
import {initPlayer} from "features/core/store/player";
import {LoadAppScreen} from "ui/core/load-app-screen";

function initApp() {
    const fakeTimeoutPromise = new Promise(res => setTimeout(res, 2000))
    const allPromises = [initPlayer(), fakeTimeoutPromise]
    return Promise.all(allPromises)
}

export function App () {
    const [isReady, readyStateChange] = useState(false)

    React.useEffect(() => {
        initApp()
            .then(_ => readyStateChange(true))
    }, [])

    const Content = isReady ? <Switch>
        <LandingRoute path="/"/>
    </Switch> : <LoadAppScreen/>

    return <MainGrid>
        <MemoryRouter>
            {Content}
        </MemoryRouter>
    </MainGrid>
}