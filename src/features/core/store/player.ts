import {createEffect, restore} from "effector";
import {v4 as uuidv4} from 'uuid'
import {IPlayer} from "../models";

const defaultPlayer: IPlayer = {
    clientToken: null,
    nickname: null,
    activeGame: null,
    stats: null
}

const generateNewPlayer = (): IPlayer => ({
    ...defaultPlayer,
    clientToken: uuidv4()
})

const notNullable = (s?: string) => s && s !== 'null'

const initPlayer = createEffect({
    handler: () => {
        const playerField = Object.keys(defaultPlayer)
        const existPlayer = playerField
            .reduce<IPlayer>((acc, field) => {
                const value = window.localStorage.getItem(field)
                const resultValue = notNullable(value as string) ? value : null
                return {...acc, [field]: resultValue}
            }, {} as IPlayer)

        return existPlayer.clientToken ? existPlayer : generateNewPlayer()
    }
})

const $player = restore<IPlayer>(initPlayer, null)

$player.watch(state => {
    console.log('Player store', state);
    if (state)
        Object.keys(state).forEach(k => {
            window.localStorage.setItem(k, state[k as keyof IPlayer] as string)
        })
})

export {$player, initPlayer}