import React from 'react'
import {createComponent} from "effector-react";
import {$rooms, startWatching, stopWatching, updateOnce} from "../store";
import './rooms.sass'
import {RoomCard} from '../molecules';

const RoomsFallback = () => <div className="container justify-content-center text">
    <h3 className="text-center text-danger">We haven't any rooms yet, lets create one</h3>
</div>

const RoomsList = createComponent($rooms, (props, rooms) => {
    return rooms.length ? <>
        <div className="rooms-box">
            {rooms.map(({gamePort, maxPlayers, currentPlayers, title, description}, i) => <RoomCard
                maxPlayers={maxPlayers}
                currentPlayers={currentPlayers}
                key={i}
                description={description}
                className="rooms-item"
                title={title}
                id={gamePort}
                onClick={console.log}
            />)}
        </div>
    </> : <RoomsFallback/>
})

export const Rooms = React.memo(() => {
    React.useEffect(() => {
        startWatching()
        return () => {
            stopWatching()
        }
    }, [])

    return <div className="container">
        <RoomsList/>
    </div>
})