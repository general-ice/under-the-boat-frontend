import React from 'react'
import {createComponent} from "effector-react";
import {$rooms, startWatching, stopWatching, updateOnce} from "../store";
import {RoomCard} from '../molecules';

const RoomsFallback = () => <div className="container justify-content-center text">
    <h3 className="text-center text-danger">We haven't any rooms yet, lets create one</h3>
</div>

const RoomsList = createComponent($rooms, (props, rooms) => {
    return rooms.length ? <>
        {rooms.map(({gamePort, maxPlayers, currentPlayers, title}, i) => <RoomCard
            maxPlayers={maxPlayers}
            currentPlayers={currentPlayers}
            key={i}
            title={title}
            onClick={() => console.log(gamePort)}
        />)}
    </> : <RoomsFallback/>
})

export const Rooms = React.memo(() => {
    React.useEffect(() => {
        // Subscribe
        startWatching()
        return () => {
            // unsubscribe
            stopWatching()
        }
    }, [])

    return <div className="container">
        <RoomsList/>
    </div>
})