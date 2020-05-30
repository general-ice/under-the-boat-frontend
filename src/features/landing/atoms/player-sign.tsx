import React from 'react'
import './player-sign.sass'

interface IProps {
    isRegister?: boolean
}

export const PlayerSign = ({isRegister}: IProps) => {
    return <div className={['player-sign', isRegister ? 'player-sign_active' : ''].join(' ')}>M</div>
}