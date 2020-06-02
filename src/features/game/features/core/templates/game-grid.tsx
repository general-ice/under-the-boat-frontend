import React from 'react'
import {GameHead} from 'ui/game'

interface IProps {

}

export const GameGrid = () => {
    return <div className="relative-layer">
        <GameHead />
        Game field
    </div>
}