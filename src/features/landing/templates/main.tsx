import React from 'react'
import './style.sass'

interface IProps {
    appName: string
}

export const MainTemplate: React.FunctionComponent<IProps> = ({children, appName}) => {

    return <div className="d-flex w-100 h-100 flex-column">
        <div className="d-flex flex-column justify-content-center align-items-center h-50" >
            <h3 className="label">{appName}</h3>
            {children}
        </div>
        <div className="d-flex flex-column h-50 w-100">
            <div className="wave w-100 h-25"/>
            <div className="sea w-100 h-50"/>
            <div className="beach flex-grow-1"/>
        </div>
    </div>
}
