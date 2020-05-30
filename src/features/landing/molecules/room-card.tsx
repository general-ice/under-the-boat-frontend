import React from 'react'
import './room-card.sass'
import {iterationFromNumber} from "lib/internal/tools";
import {PlayerSign} from '../atoms';
import {ClickIdEntity} from "lib/internal/types";

interface IProps {
    image?: any;
    title?: string
    description?: string
    maxPlayers: number
    currentPlayers: number
    onClick: ClickIdEntity
    className?: string
    id: string
}

export const RoomCard = React.memo(({title, description, image, id, maxPlayers, currentPlayers, className, onClick}: IProps) => {

    const handleClick = () => onClick(id)

    const PlayersRows = iterationFromNumber(maxPlayers)
        .map(i => <PlayerSign isRegister={i < currentPlayers - 1} key={i}/>)

    return <div className={['room-card', className].join(' ')} onClick={handleClick}>
        <div className="title">{title}</div>
        <div className="body">
            <div className="description">{description}</div>
            <div className="players">{PlayersRows}</div>
        </div>
    </div>
})