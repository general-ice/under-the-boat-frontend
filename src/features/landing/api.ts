import {simpleRequest} from "lib/network/request";
import {Either, right as EitherRight} from "@sweet-monads/either";
import {IGameRoom} from "./models";

const FakeRooms: IGameRoom[] = [
    {
        gamePort: '8083',
        maxPlayers: 4,
        currentPlayers: 3,
        title: 'New games for looser',
        description: 'Come to me guys'
    },
    {
        gamePort: '8082',
        maxPlayers: 6,
        currentPlayers: 2,
        title: 'Game game game',
        description: 'It is first my room'
    }
]

export const getRooms = () => {
    console.log('get fake rooms request')
    return Promise.resolve(EitherRight(FakeRooms).value)
}

// export const getRooms = () => simpleRequest('games/get-all')