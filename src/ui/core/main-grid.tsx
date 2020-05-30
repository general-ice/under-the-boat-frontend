import React from 'react'

export const MainGrid: React.FunctionComponent = React.memo(({children}) => {
    return <div className="absolute-layer main-grid">
        <div className="relative-layer flex-column">
            {children}
        </div>
    </div>
})